import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: {},
    set: ''
  },
  mutations: {
    allData (state, payload) {
      state.people = payload
    },
    terimaYes (state, payload) {
      state.set = payload
    }
  },
  actions: {
    loadData ({ commit }, payload) {
      // sintax utk load data
      let x = {
        id: 1, name: 'Andri JNS'
      }
      commit('allData', x)
    },
    sendYes ({ commit }, payload) {
      commit('terimaYes', payload)
    }
  }
})
