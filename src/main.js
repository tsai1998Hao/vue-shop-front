import { createApp } from 'vue';
import App from './App.vue';
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.min.css';
// import router from '../src/router/router'; 
// import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import router from './router'; 
const app = createApp(App);
app.use(BootstrapVue3);
app.use(router);  // 使用 router
app.mount('#app');
