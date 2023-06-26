<template>
    <div class="container" v-if="imagesCollection">
        <div class="heading">
            <h1>Favorite Images Collection</h1>
            <span class="sub-title">
                Curate a stunning collection of your most beloved images.
            </span>
        </div>

        <div class="favorite-images">
            <div class="image-wrapper" v-for="(doc, index) of imagesCollection" :key="index" :data-id="doc.id">

                <img :src="doc.image" @click="() => showImg(index)">

                <a href="javascript:void(0);" class="delete-button" @click="triggerPopup($event)" :data-id="index">
                    Delete
                </a>

                <div class="popup-warning" :data-id="index">
                    <div class="wrapper">
                        <span class="message">
                            Are you sure you want to remove this image from your collection?
                        </span>
                        <a href="javascript:void(0);" @click="deleteCollection(doc.id)" :data-id="index">Confirm</a>
                        <a href="javascript:void(0);" @click="triggerPopup($event)" :data-id="index">Cancel</a>
                    </div>
                </div>
            </div>
        </div>

        <vue-easy-lightbox
            :visible="visibleRef"
            :imgs="lightBoxImages"
            :index="indexRef"
            @hide="onHide"
        />

    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { db } from '@/firebase'
import { collection, query, where, getDocs, deleteDoc, limit, doc } from "firebase/firestore"
import { useStore } from 'vuex'
import VueEasyLightbox from 'vue-easy-lightbox'
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css'

interface Image {
    id: number;
    image: string;
}

/* RETRIEVE STORE */
const store = useStore()

/* STORE FAVORITE IMAGES COLLECTION */
const imagesCollection: any = ref([])
const lightBoxImages: any = ref([])

const userFavImages = async () => {
    /* QUERY FAVORITE IMAGES */
    const q = query(
                    collection(db, 'favoriteImages'), 
                    where("uuid", "==", store.state.user.uid),
                    limit(10)
                )

    const getCollection = await getDocs(q)
    
    getCollection.forEach((doc: any) => {
        const colEl: Image = { id: doc.id, ...doc.data() }

        imagesCollection.value.push(colEl);
        lightBoxImages.value.push(doc.data().image)
    })
}

const deleteCollection = async (id: string) => {
     /* QUERY FAVORITE IMAGES */
     const docRef = doc(db, 'favoriteImages', id);
     /* IF RECORD EXISTS RETURN A MESSAGE */
     await deleteDoc(docRef)
        .then(() => {

            const popup: HTMLElement | any = document.querySelector('.popup-warning.active')
            popup.classList.remove('active')

            setTimeout(() => {
                const element: HTMLElement | any = document.querySelector(`.image-wrapper[data-id="${id}"]`)
                element.remove()
            }, 300)

            /* DEFINE TOAST POPUP */
            const $toast = useToast()

            $toast.success("Imaged successfully removed from collection!", {
                position: 'bottom-right'
            })
        })
        .catch((error: any) => {
            console.error("Error deleting document:", error);
        });
}

/* TRIGGER WARNING POPUP */
const triggerPopup = ($event: any) => {
    const target = $event.target
    const dataId = target.getAttribute('data-id')
    const popup: HTMLElement | any = document.querySelector(`.popup-warning[data-id="${dataId}"]`)

    popup.classList.contains('active') ?  popup.classList.remove('active') : popup.classList.add('active')
}

/* LIGHT BOX REFS AND FUNCTIONS */
const visibleRef = ref(false)
const indexRef = ref(0)

const showImg = (index: number) => {
    indexRef.value = index
    visibleRef.value = true
    console.log(index)
}

const onHide = () => visibleRef.value = false

onMounted(() => {
    userFavImages()
})

</script>

<style lang="scss" scoped>
    .heading{
        padding: 0 10px;
        margin-bottom: 20px;
    }
    .favorite-images{
        display: flex;
        flex-wrap: wrap;
        .image-wrapper{
            width: 50%;
            max-height: 300px;
            padding: 10px;
            position: relative;
            @media (min-width: 768px){
                width: 33%;
            }
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;
                cursor: pointer;
            }

            .delete-button{
                position: absolute;
                top: 20px;
                right: 20px;
                color: $light;
                text-decoration: none;
                background: $red;
                padding: 0 8px;
                border-radius: 3px;
            }

            .popup-warning{
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 999;
                background: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(5px);
                display: flex;
                align-items: center;
                justify-content: center;
                visibility: hidden;
                opacity: 0;
                transition: opacity .3s, visibility .3s;
                padding: 20px;
                &.active{
                    visibility: visible;
                    opacity: 1;
                }
                .wrapper{
                    display: flex;
                    flex-direction: column;
                    background: #181818;
                    padding: 30px;
                    border-radius: 10px;
                    max-width: 400px;
                    @media (max-width: 480px){
                        padding: 20px;
                    }
                    .message{
                        font-size: 20px;
                        text-align: center;
                        margin-bottom: 20px;
                        color: $light;
                        @media (max-width: 480px){
                            font-size: 18px;
                        }
                    }
                    a{
                        width: 100%;
                        padding: 10px;
                        text-align: center;
                        margin: 10px 0;
                        border-radius: 10px;
                        text-decoration: none;
                        font-size: 16px;
                        color: $light;
                        @media (max-width: 480px){
                            padding: 8px;
                            border-radius: 5px;
                        }
                        &:first-of-type{
                            background: $red;
                        }
                        &:last-of-type{
                            background: $light;
                            color: #181818;
                        }
                    }
                }
            }
        }
    }
</style>