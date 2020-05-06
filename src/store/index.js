//创建并暴露vuex 实例,将其他文件中的所有数据交给仓库管理
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default new Vuex.Store({
  state,//存储数据
  getters,//计算属性
  mutations,//方法:同步修改数据的方法
  actions//方法,包含异步操作,提交一个mutation,触发 mutations,中的方法,修改数据,
})