import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n' // 直接使用已配置好的 i18n 实例

const app = createApp(App)
app.use(router)
app.use(i18n) // 使用导入的 i18n
app.mount('#app')