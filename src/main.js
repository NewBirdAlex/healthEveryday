import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import vconsole from 'vconsole'


//reset css inport
import './assets/css/reset.css'
// import './assets/font/iconfont.css'



import './lib/adaptive'

import 'mint-ui/lib/style.css'
// import { Toast } from 'mint-ui';
// import { Swipe, SwipeItem } from 'mint-ui';
//
// import { DatetimePicker } from 'mint-ui';
//
// import { TabContainer, TabContainerItem } from 'mint-ui';
//
// Vue.component(TabContainer.name, TabContainer);
// Vue.component(TabContainerItem.name, TabContainerItem);
//
// Vue.component(DatetimePicker.name, DatetimePicker);
//
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
import MintUI from 'mint-ui'
//
Vue.use(MintUI);

// Vue.$toast = Vue.prototype.$toast = Toast;
//mint-ui --------------------------------------------

//ajax----------------
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// axios.interceptors.request.use((config) => {
//     if(config.method  == 'post'){
//         if(config.data instanceof Object){//如果传进来的是一个对象
//             var params = '';
//             for(var k in config.data){
//                 params += `&${k}=${config.data[k]}`;
//             }
//             config.data = params;
//         }
//     }
//     return config;
// },(error) =>{
//
// });
import {config} from './lib/config'
Vue.use(config)
//ajax----------------

/**
 * jsonתformdata
 * @param json
 * @returns {string}
 */
Vue.prototype.$jsonToFormData = function(json) {
    var str = ''
    for (var key in json) {
        var value = json[key]
        if (value != null && typeof value != "undefined") {
            if (value.__proto__.constructor == Array) {
                for (var index in value) {
                    if (typeof value[index] != "function")
                        str += '&' + key + '=' + value[index]
                }
                continue;
            }
            str += '&' + key + '=' + value
        }
    }
    return str.substr(1)
}

//过滤器
import filters from './lib/myfilter'

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

new Vue({
    el: '#app',
    router,
    store,
    axios,
    render: h => h(App)
})
