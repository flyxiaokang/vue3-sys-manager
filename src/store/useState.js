/*
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2022-08-11 11:30:33
 * @LastEditors: kangjinrui
 * @LastEditTime: 2022-08-11 11:30:33
 */
import { mapState, createNamespacedHelpers } from 'vuex'
import { useMapper } from './useMapper'

export function useState(moduleName, mapper) {
  let mapperFn = mapState
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState
  }

  return useMapper(mapper, mapperFn)
}

