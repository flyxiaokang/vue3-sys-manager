/*
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2022-03-22 15:00:33
 * @LastEditors: kangjinrui
 * @LastEditTime: 2022-03-22 15:20:34
 */

import router from './router/index'
import setting from './setting'

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | ${setting.title}` || '空白';
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ?
            next() :
            next('/403');
    } else {
        next();
    }
});