<template>
    <div class="container">
        <div class="heading">
            <h1>Picture of the day!</h1>
            <span class="sub-title">
                Discover the stunning image chosen for today's picture.
            </span>
        </div>

        <div class="datepicker-container">
            <label for="datepicker">Select Date:</label>
            <VueDatePicker :format="formatDate" v-model="selectedDate" :max-date="new Date()">
                <template #dp-input="{ value }">
                    <input type="text" :value="value" />
                </template>
            </VueDatePicker>
        </div>

        <template v-if="response">
            <h1>{{ response.title }}</h1>
            <p>{{ response.explanation }}</p>

            <div class="image-wrapper" v-if="response.url">
                <img :src="response.url" :alt="response.title" />
    
                <button 
                @click="addToFavorite(response.url, store.state.user.uid)" 
                :class="{'liked': liked}"
                v-if="store.state.user"
                >
                    <i class="cs-heart"></i>
                </button>
            </div>
        </template>
        
        <template v-else>
            <p>Loading...</p>
        </template>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { formatDate } from '../utils';
import { db } from '@/firebase'
import { collection, addDoc, query, where, limit, getDocs, deleteDoc, serverTimestamp } from "firebase/firestore"
import { useStore } from 'vuex'
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css'

/* DEFINE A VARIABLE TO STORE RESPONSE DATA FROM API CALL */
const response: any = ref(null);

/* CURRENT DATE AS DEFAULT */
const selectedDate = ref('');

/* CHECK IF IMAGE IS ALREADY ADDED TO COLLECTION */
const liked = ref(false)

/* RETRIEVE STORE */
const store = useStore()


/* ASSIGN FUNCTION FOR RETRIEVING IMAGE OF THE DAY */
const fetchData = async (date = selectedDate.value) => {
    response.value = null
    try {
        const result = await axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=${window.nasa_api_key}&date=${date}`
        );
        response.value = result.data;

        if(store.state.user){
            const q = query(
                            collection(db, "favoriteImages"), 
                            where("uuid", "==", store.state.user.uid),
                            where("image", "==", response.value.url)
                            )
            const getCollection = await getDocs(q)
    
            liked.value = getCollection.empty ? false : true
    
            console.log(liked.value)
        }
    } catch (error) {
        console.error(error);
        response.value = null;
    }
};

/* ADD DAILY PIC TO FAVORITE IF AUTHENTICATED */
const addToFavorite = async (imageUrl:string, userUid: string) => {
    /* RETRIEVE COLLECTION */
    const favImages = collection(db, 'favoriteImages')

    /* QUERY FAVORITE IMAGES */
    const q = query(favImages, 
                    where("uuid", "==", userUid),
                    where('image', '==', imageUrl),
                    limit(1)
                )

    const getFavImage = await getDocs(q)

    /* DEFINE TOAST POPUP */
    const $toast = useToast()
    
    /* CHECK IF RECORD EXISTS */
    if (getFavImage.empty) {
        /* IF EMPTY - CREATE RECORD */
        const dataObj = {
            uuid: userUid,
            image: imageUrl,
            created_at: serverTimestamp(),
        };

        try {
            /* ADD IMAGE TO FAVORITES */
            await addDoc(favImages, dataObj);
            liked.value = true

            $toast.success("Imaged successfully added to collection!", {
                position: 'bottom-right'
            })
        } catch (error) {
            console.error("Error adding favorite image:", error);

            $toast.error("Error adding favorite image: " + error, {
                position: 'bottom-right'
            })
        }
    } else {
        /* IF RECORD EXISTS RETURN A MESSAGE */
        await deleteDoc(getFavImage.docs[0].ref)
        .then(() => {
            console.log("Document successfully deleted!");
            liked.value = false
            
            $toast.success("Image successfully removed from collection!", {
                position: 'bottom-right'
            })
        })
        .catch((error: any) => {
            console.error("Error deleting document:", error);

            $toast.error("Error deleting document: " + error, {
                position: 'bottom-right'
            })
        });
    }
}


/* RUN FETCH DATA IF DATE IS UPDATED */
watch(selectedDate, (newDate: any) => {
    const formattedDate: any = formatDate(newDate);
    selectedDate.value = formattedDate;

    fetchData();
});

/* FETCH DATA WHEN VIEW IS MOUNTED */
onMounted(() => {
    const formattedDate = formatDate(new Date());
    selectedDate.value = formattedDate;
});
</script>
  
<style lang="scss" scoped>
.container {
    .heading{
        margin-bottom: 20px;
    }

    p {
        margin-bottom: 40px;
    }

    .image-wrapper{
        position: relative;
        max-width: 900px;
        img {
            width: 100%;
            object-fit: contain;
        }
        button{
            position: absolute;
            right: 10px;
            top: 10px;
            cursor: pointer;
            border: none;
            font-size: 18px;
            cursor: pointer;
            background: #333;
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: transform .3s;
            &:hover{
                transform: scale(1.1);
            }
            i{
                color: $light;
                transition: color .3s;
            }
            &.liked{
                i{
                    color: $red;
                }
            }
        }
    }

    .datepicker-container {
        margin-bottom: 20px;
    }
}
</style>
  