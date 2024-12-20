// import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
// import App from './survey.vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import Li from './components/li.vue';
createApp(App)
  .component("Li", Li)
  .use(ElementPlus)
  .mount('#app');
