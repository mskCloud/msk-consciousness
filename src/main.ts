import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { setupApp, preloadApp, startApp } from 'wujie'

createApp(App).mount('#app')

type ObjectString = {
    [key: string]: any
}

const getUrl = (key: string) => {
    const conf: ObjectString = {
        Bank: {
            dev: '//localhost:5533/',
            prod: '//47.113.180.39/bank/'
        },
        Grimoire: {
            dev: '//localhost:5544/',
            prod: '//47.113.180.39/grimoire/'
        }
    }
    if (import.meta.env.NODE_ENV === 'development') {
        return conf[key].dev
    } else {
        return conf[key].prod
    }
}

const bankConfig = {
    name: 'Bank',
    url: getUrl('Bank'),
    exec: true,
    el: '#sub-app',
    sync: true,
    alive: true
}

const grimoireConfig = {
    name: 'Grimoire',
    url: getUrl('Grimoire'),
    exec: true,
    el: '#sub-app',
    sync: true,
    alive: true
}

setupApp(bankConfig)
setupApp(grimoireConfig)
preloadApp(bankConfig)
preloadApp(grimoireConfig)
startApp(bankConfig)
