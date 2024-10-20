import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { createPinia } from 'pinia'
import { firebaseConfig } from './firebaseConfig'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const pinia = createPinia()
initializeApp(firebaseConfig);

createApp(App)
.use(pinia)
.use(router)
.use(PrimeVue, {
  theme: {
      preset: Aura
  }
})
.mount('#app')
