import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App'
import 'element-plus/dist/index.css'
import router from './router/index'
import store from './store/index'
import './assets/styles/index.scss'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
