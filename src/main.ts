import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { bus, setupApp, preloadApp, startApp, destroyApp } from 'wujie'

createApp(App).mount('#app')

const bankConfig = {
    name: 'Bank',
    url: 'http://localhost:5173/',
    exec: true,
    el: '#sub-app',
    sync: true,
    alive: true
}

setupApp(bankConfig)
preloadApp(bankConfig)
startApp(bankConfig)
