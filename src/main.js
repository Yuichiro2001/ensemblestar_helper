import { createApp } from 'vue'
import App from './App.vue'
import es1 from './calculate.vue'
import './assets/main.css'
import ElementPlus from 'element-plus'
import { zhCn } from 'element-plus/lib/locale/lang/zh-cn'
const es = createApp(es1)
es.use(ElementPlus, {locale:zhCn})
es.mount("#es")