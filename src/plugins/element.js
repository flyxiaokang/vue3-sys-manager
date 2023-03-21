/*
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2021-11-27 20:54:07
 * @LastEditors: kangjinrui
 * @LastEditTime: 2022-03-21 11:24:33
 */
import ElementPlus from 'element-plus'
import { createI18n } from 'vue-i18n'
// import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/dist/index.css'
import localeZH from 'element-plus/lib/locale/lang/zh-cn'
import localeEN from 'element-plus/lib/locale/lang/en'
import messages from '../utils/i18n'
// 全局注册icon
import * as ELIcons from '@element-plus/icons-vue'

const i18n = createI18n({
  locale: localeZH.name,
  fallbackLocale: localeEN.name,
  messages,
})

export default (app) => {
  for (let iconName in ELIcons) {
    app.component(iconName, ELIcons[iconName])
  }	

  app.use(ElementPlus, { locale:localeZH })
  app.use(i18n)
}
