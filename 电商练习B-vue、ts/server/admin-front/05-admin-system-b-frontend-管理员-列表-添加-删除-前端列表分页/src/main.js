import "normalize.css";
import "./assets/main.scss";

// 引入element plus的样式
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";

// 引入图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(ElementPlus);

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

let pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);

app.mount("#app");
