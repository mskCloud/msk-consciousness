import { createApp, createSSRApp } from 'vue'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import './style.css'
import App from './App.vue'
import { renderToString } from 'vue/server-renderer'

createApp(App).mount('#app')

// const app = createSSRApp(App)

// ;(async () => {
//     const html = await renderToString(app)
//     console.log(html)
// })()
