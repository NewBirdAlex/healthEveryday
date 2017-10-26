let install = (vue, options) => {
    vue.prototype.$config = {
        path: 'http://192.168.0.124:8080'
    }
}

export const config = install