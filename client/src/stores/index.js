import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const url = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: {},
    questions: []
  },
  mutations: {
    changeIsLoginAndMakeToken (state, payload) {
      state.isLogin = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    setQuestions (state, payload) {
      state.questions = payload
    }
  },
  actions: {
    loginIn ({ commit }, payload) {
      axios({
        url: url + `/users/signin`,
        method: 'post',
        data: { email: payload.email, password: payload.password }
      })
        .then(found => {
          localStorage.setItem('token', found.data.token)
          commit('changeIsLoginAndMakeToken', true)
        })
        .catch(() => { console.log(`failed`) })
    },
    registerIn ({ commit }, payload) {
      axios({
        url: url + `/users/signup`,
        method: 'post',
        data: { name: payload.name, email: payload.email, password: payload.password }
      })
        .then(found => {
          alert('teeet')
        })
        .catch(() => { console.log(`failed to register`) })
    },
    cekUserLogin ({ commit }) {
      axios({
        url: url + `/users/one`,
        method: 'get',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(found => {
          commit('setUser', found.data)
          commit('changeIsLoginAndMakeToken', true)
        })
        .catch(() => { console.log(`failed`) })
    },
    destroyLogin ({ commit }) {
      commit('changeIsLoginAndMakeToken', false)
    },
    getQuestions ({ commit }, payload) {
      if (payload === undefined) {
        axios({
          url: url + `/questions`,
          method: 'get'
        })
          .then(found => {
            commit('setQuestions', found.data)
          })
          .catch(() => console.log(`Failed to get data`))
      }
    }
  }
})
