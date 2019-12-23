import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    INCREMENT (state,name) {
      state.count = name
    },
    reduce(state){
      state.count--
    }
  },
  actions: {
    increment ({commit}) {
      commit('INCREMENT')
      // console.log('context',context)
      // context.commit('increment')
    }
  }
})

export default store
