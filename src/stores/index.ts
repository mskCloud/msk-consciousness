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

export const bankConfig = {
    name: 'Bank',
    url: getUrl('Bank'),
    exec: true,
    el: '#sub-app',
    sync: true,
    alive: true
}

export const grimoireConfig = {
    name: 'Grimoire',
    url: getUrl('Grimoire'),
    exec: true,
    el: '#sub-app',
    sync: true,
    alive: true
}
