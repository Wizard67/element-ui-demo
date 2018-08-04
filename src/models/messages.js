import { request } from '@/services'

export default {
  state: {
    messages: {},
    suggestions: [
      { message: '搜索提示一' },
      { message: '搜索提示二' },
      { message: '搜索提示三' }
    ]
  },

  mutations: {
    setMessages (store, value) {
      store.messages = value
    }
  },

  getters: {},

  actions: {
    getMessage ({ commit }) {
      request('message').then(res => {
        commit('setMessages', res.payload.messages)
      })
    }
  }
}
