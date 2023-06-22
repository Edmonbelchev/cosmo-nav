import { createStore } from 'vuex'
import router from '../router'
import { auth } from '@/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'

export default createStore({
    state: {
        user: null
    },
    mutations: {
        SET_USER(state, user){
            state.user = user
        },
        CLEAR_USER(state){
            state.user = null
        }
    },
    actions: {
        async login ({ commit }, details){
            const { email, password } = details

            try{
                await signInWithEmailAndPassword(auth, email, password)
            } catch(error){
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

        async register ({ commit }, details){
            const { email, password } = details

            try{
                await createUserWithEmailAndPassword(auth, email, password)
            } catch(error){
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

            commit('SET_USER', auth.currentUser)
            router.push('/')
        },

        async logout({ commit }){
            await signOut(auth)

            commit('CLEAR_USER')

            router.push('/login')
        },

        fetchUser({commit}){
            auth.onAuthStateChanged(async user => {
                if(user === null){
                    commit('CLEAR_USER')
                }else{
                    commit('SET_USER', user)

                    if(router.isReady() && router.currentRoute.value.path === '/login'){
                        router.push('/')
                    }
                }
            })
        }
    }
})