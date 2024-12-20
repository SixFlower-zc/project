import './assets/main.css'
import 'normalize.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import { Message } from '@arco-design/web-vue'

const app = createApp(App)
Message._context = app._context

app.use(createPinia().use(piniaPluginPersistedstate))
app.use(router)

app.mount('#app')
