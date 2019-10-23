import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistedstate from 'vuex-persistedstate'
import * as types from '@/store/mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: []
  },
  mutations: {
    [types.SET_LISTS] (state, { lists }) {
      state.lists = lists
    }
  },
  actions: {
    async fetchLists ({ commit }) {
      const { data } = await axios.get(`/api/v1/events/list`)
      commit(types.SET_LISTS, data)
    },
    async addEvents ({ commit }, payload) {
      const { data } = await axios.post('/api/v1/events/create', payload)
      commit(types.SET_LISTS, data)
    }
  },
  getters: {
    lists: state => state.lists
  },
  plugins: [
    VuexPersistedstate({ storage: window.sessionStorage }),
  ]
})