<template>
    <div class="container">
        <div class="profile-wrapper">
            <div class="form-wrapper">
                <div class="heading">
                    <h1>
                        Edit profile
                    </h1>
                </div>
                
                <div class="input-wrapper">
                    <i class="cs-user"></i>
                    <input type="email" v-model="update_form.email" placeholder="Email" />
                </div>

                <div class="input-wrapper">
                    <i class="cs-password"></i>
                    <input type="password" v-model="update_form.password" placeholder="Password" />
                </div>

                <div class="input-wrapper">
                    <i class="cs-location"></i>
                    <input type="text" v-model="update_form.address" placeholder="Address" />
                </div>

                <div class="input-wrapper">
                    <i class="cs-calendar"></i>
                    <input type="number" v-model="update_form.age" placeholder="Age" />
                </div>

                <button @click="update">Update</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { db } from '@/firebase'
import { collection, query, where, setDoc, doc, getDocs } from "firebase/firestore"
import { useStore } from 'vuex'

/* RETRIEVE STORE */
const store = useStore()
const update_form = ref({
    email: '',
    password: '',
    age: '',
    address: ''
})

const retrieveUser = async () => {
    /* QUERY USERS COLLECTION */
    try {
        update_form.value.email = store.state.user.email
        
        const q = query(
          collection(db, 'usersCollection'),
          where('uid', '==', store.state.user.uid)
        );

        const querySnapshot = await getDocs(q)

        querySnapshot.forEach((doc: any) => {
            update_form.value.address = doc.data().address,
            update_form.value.age = doc.data().age
        })

      } catch (error) {
        console.error('Error getting collection data:', error);
      }
}

const update = async () => {
    const userRef = doc(db, "usersCollection", store.state.user.uid)

    const data = {
        uid: store.state.user.uid,
        age: update_form.value.age,
        address: update_form.value.address,
    }

    setDoc(userRef, data, { merge: true })
    .then(() => {
        console.log('User updated successfully')
    })
    .catch((error: any) => {
        console.error('Error updating user:', error);
    });
}

onMounted(() => {
    retrieveUser()
})
</script>

<style lang="scss" scoped>
   .form-wrapper{
        max-width: 480px;
        width: 100%;

        button{
        padding: 12px;
        background: $red;
        color: $light;
        border: none;
        border-radius: 5px;
        width: 100%;
        font-size: 15px;
        cursor: pointer;
        transition: background .3s;
            &:hover{
                background: darken($red, 10%);
            }
        }
   }
</style>