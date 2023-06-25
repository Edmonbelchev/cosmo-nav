import { createStore } from 'vuex'
import router from '../router'
import { auth, db } from '@/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { collection, addDoc } from "firebase/firestore"

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

            try{
                await signInWithEmailAndPassword(auth, email, password)
            } catch(error: any){
                switch(error.code){
                    case 'auth/user-not-found':
                    console.log("User not found")
                    break

                    case 'auth/wrong-password':
                    console.log("Wrong password")
                    break

                    default:
                    console.log("Something went wrong")
                }

                return
            }

            commit('SET_USER', auth.currentUser)
            router.push('/')
        },

        async register ({ commit }: any, details: UserState){
            const { email, password, age, address } = details

            try{
                await createUserWithEmailAndPassword(auth, email, password)
            } catch(error: any){
                switch(error.code){
                    case 'auth/email-already-in-use':
                    console.log("Email already in use")
                    break

                    case 'auth/invalid-email':
                    console.log("Invalid email")
                    break

                    case 'auth/opeartion-not-allowed':
                    console.log("Operation not allowed")
                    break

                    case 'auth/weak-password':
                    console.log("Weak password")
                    break

                    default:
                    console.log("Something went wrong")
                }

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