import { createStore } from 'vuex'
import router from '../router'
import { auth, db } from '@/firebase'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { collection, addDoc } from "firebase/firestore"
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css'

interface UserState  {
    uid: string,
    email: string,
    password: string,
    age: number,
    address: string,
}

interface State {
    user: UserState | null;
}

/* DEFINE TOAST POPUP */
const $toast = useToast()
/* GET DOCUMENT'S BODY */
const body : HTMLElement | any = document.querySelector("body")

export default createStore<State>({
    state: {
        user: null as any
    },
    mutations: {
        SET_USER(state: State, user: UserState){
            state.user = user
        },
        CLEAR_USER(state: State){
            state.user = null
        }
    },
    actions: {
        async login ({ commit }: any, details: UserState){
            const { email, password } = details

            /* ADD LOADER */
            body.classList.add("loading")
            
            try{
                await signInWithEmailAndPassword(auth, email, password)

                 /* REMOVE LOADER */
                 body.classList.remove("loading")
            } catch(error: any){
                switch(error.code){
                    case 'auth/user-not-found':
                    console.log("User not found")

                    $toast.error("User not found", {
                        position: 'bottom-right'
                    })
                    break

                    case 'auth/wrong-password':
                    console.log("Wrong password")

                    $toast.error("Wrong password", {
                        position: 'bottom-right'
                    })
                    break

                    default:
                    console.log("Something went wrong")

                    $toast.error("Something went wrong", {
                        position: 'bottom-right'
                    })
                }

                /* REMOVE LOADER */
                body.classList.remove("loading")

                return
            }

            commit('SET_USER', auth.currentUser)

            $toast.success("Successfully logged in!", {
                position: 'bottom-right'
            })

            router.push('/')
        },

        async loginWithGoogle ({ commit }: any) {
            /* ADD LOADER */
           body.classList.add("loading")

            try {
                const auth = getAuth()
                const provider = new GoogleAuthProvider();
                const result = await signInWithPopup(auth, provider);
                const user = result.user

                commit('SET_USER', user)

                $toast.success("Successfully logged in!", {
                    position: 'bottom-right'
                })
            } catch (error) {
                console.error('Error signing in with Google:', error);
                $toast.error('Error signing in with Google: ' + error, {
                    position: 'bottom-right'
                })
            }

            /* REMOVE LOADER */
            body.classList.remove("loading")
        },

        async register ({ commit }: any, details: UserState){
            const { email, password, age, address } = details

           /* ADD LOADER */
           body.classList.add("loading")

            try{
                await createUserWithEmailAndPassword(auth, email, password)

                /* REMOVE LOADER */
                body.classList.remove("loading")

                $toast.success("Successfully registered!", {
                    position: 'bottom-right'
                })
            } catch(error: any){
                switch(error.code){
                    case 'auth/email-already-in-use':
                    console.log("Email already in use")

                    $toast.error("Email already in use", {
                        position: 'bottom-right'
                    })
                    break

                    case 'auth/invalid-email':
                    console.log("Invalid email")

                    $toast.error("Invalid email", {
                        position: 'bottom-right'
                    })
                    break

                    case 'auth/opeartion-not-allowed':
                    console.log("Operation not allowed")

                    $toast.error("Operation not allowed", {
                        position: 'bottom-right'
                    })
                    break

                    case 'auth/weak-password':
                    console.log("Weak password")

                    $toast.error("Weak password", {
                        position: 'bottom-right'
                    })
                    break

                    default:
                    console.log("Something went wrong")

                    $toast.error("Something went wrong", {
                        position: 'bottom-right'
                    })
                }

                /* REMOVE LOADER */
                body.classList.remove("loading")

                return
            }

            /* STORE ADDITIONAL INFO IN USERS COLLECTION */
            const user: UserState = auth.currentUser

            const additionalData = {
                uid: user.uid,
                age: age,
                address: address
            }

            try{
                await addDoc(collection(db, "usersCollection"), additionalData)
            }catch(error: any){
                console.log(error)
            }

            commit('SET_USER', auth.currentUser)
            router.push('/')
        },

        async logout({ commit }: any){
            await signOut(auth)

            commit('CLEAR_USER')

            router.push('/login')
        },

        fetchUser({commit}: any){
            auth.onAuthStateChanged(async user => {
                if(user === null){
                    commit('CLEAR_USER')
                }else{
                    commit('SET_USER', user)

                    await router.isReady()

                    if(router.currentRoute.value.path === '/login'){
                        router.push('/')
                    }
                }
            })
        }
    }
})