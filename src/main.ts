import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from '@/firebase';

let app: any;

/* DECLARE NASA API KEY */
declare global {
    interface Window { nasa_api_key: typeof globalThis | any }
}

window.nasa_api_key = 'eRMoQ6l5gXrhya9VGch0aLCRiTx1jioiSd7jFByI'

auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
        
        app.use(store)
        app.use(router)
        app.mount('#app')

        /* REMOVE LOADER WHEN APP IS LOADED */
        document.querySelector("body.loading")?.classList.remove("loading")
    }
});