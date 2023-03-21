/*
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2021-11-27 20:54:07
 * @LastEditors: kangjinrui
 * @LastEditTime: 2023-03-16 22:55:12
 */
import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'
import installElementPlus from './plugins/element'

import './assets/css/icon.css'

const app = createApp(App)
installElementPlus(app)

app
    .use(store)
    .use(router)
    .mount('#app')

// 异常提示
app.config.errorHandler = (err, vm, info) => {
    console.log('[全局异常]', err, vm, info)
}