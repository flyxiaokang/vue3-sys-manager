/*
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2021-11-27 20:54:07
 * @LastEditors: kangjinrui
 * @LastEditTime: 2022-03-22 11:36:46
 */
import {
    createStore
} from 'vuex'
import getters from './getters';

// const modulesFiles = require.context('./modules', true, /\.js$/);
const modulesFiles = import.meta.globEager('./modules/*.js')
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = []
for (const key in modulesFiles) {
    if (Object.hasOwnProperty.call(modulesFiles, key)) {
        const moduleName = key.replace(/^\.\/(.*)\.\w+$/, '$1').replace('modules/','');
        modules[moduleName] = modulesFiles[key].default;
    }
}
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//     // set './app.js' => 'app'
//     const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
//     const value = modulesFiles(modulePath);
//     modules[moduleName] = value.default;
//     return modules;
// }, {});

export default createStore({
    modules,
    getters
})