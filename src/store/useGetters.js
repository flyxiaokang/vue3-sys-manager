/*
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2022-08-11 11:31:04
 * @LastEditors: kangjinrui
 * @LastEditTime: 2022-08-11 11:31:05
 */
import { mapGetters, createNamespacedHelpers } from 'vuex'
import { useMapper } from './useMapper'

export function useGetters(moduleName, mapper) {
  let mapperFn = mapGetters
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters
  }

  return useMapper(mapper, mapperFn)
}
