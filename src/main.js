import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Импорт роутера

// Создание и монтирование приложения
const app = createApp(App)

app.use(router) // Подключение роутера

app.mount('#app') // Монтирование в #app из public/index.html