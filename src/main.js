import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { createPinia } from 'pinia'
import { firebaseConfig } from './firebaseConfig'


const pinia = createPinia()
initializeApp(firebaseConfig);

createApp(App).use(pinia).use(router).mount('#app')
