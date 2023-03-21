/*
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2022-08-11 11:30:06
 * @LastEditors: kangjinrui
 * @LastEditTime: 2022-08-11 11:30:07
 */
import { computed } from 'vue'
import { useStore } from 'vuex'

export function useMapper(mapper, mapFn) {
  // 拿到store独享
  const store = useStore()

  // 获取到对应的对象的functions: {name: function, age: function}
  const storeStateFns = mapFn(mapper)

  // 对数据进行转换
  const storeState = {}
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({$store: store})
    storeState[fnKey] = computed(fn)
  })

  return storeState
}
