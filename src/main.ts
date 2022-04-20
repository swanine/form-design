import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App'
import router from './router/index'
import store from './store/index'
import 'loaders.css/loaders.min.css'
import './assets/styles/index.scss'
import 'intro.js/introjs.css'
import 'element-plus/dist/index.css'
import 'hint.css/hint.min.css'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
