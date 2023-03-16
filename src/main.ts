import { createApp } from 'vue';
// import './style.css';
import App from './App.vue';

import { setupRouter } from '@/routes';
import { createPinia } from 'pinia';
import { setupElementPlus, setupZoomer, setupTimeago } from '@/plugins';

const app = createApp(App);
setupRouter(app); //vue-router apply
setupElementPlus(app); //element plus apply
app.use(createPinia());
setupZoomer(app); //vue-zoomer apply
setupTimeago(app);
app.mount('#app');
