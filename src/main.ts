import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { setupApp, preloadApp, startApp } from 'wujie'
import { bankConfig, grimoireConfig } from './stores'

createApp(App).mount('#app')

setupApp(bankConfig)
setupApp(grimoireConfig)
preloadApp(bankConfig)
preloadApp(grimoireConfig)
startApp(bankConfig)
