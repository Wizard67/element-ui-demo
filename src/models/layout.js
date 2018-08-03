import { request } from '@/services'
import storage from '@/utils/storage'

export default {

  state: {
    nav: [],
    userInfo: {
      userName: 'UserName',
      avatar: require('@/assets/images/avatar.png')
    },
    messages: {},
    suggestions: [
      { message: '搜索提示一' },
      { message: '搜索提示二' },
      { message: '搜索提示三' }
    ]
  },

  mutations: {
    setUserInfo (store, value) {
      store.userInfo = value
    },
    setMessages (store, value) {
      store.messages = value
    },
    setNav (store, value) {
      store.nav = value
    }
  },

  getters: {},

  actions: {
    login (context, { autoLogin, ...params }) {
      autoLogin ? storage.init('local') : storage.init('session')

      return new Promise((resolve, reject) => {
        request('login', params).then(res => {
          if (res.status === 200) {
            storage.setItem('token', res.payload.token)
            resolve(res)
          } else {
            reject(res)
          }
        })
      })
    },

    logout () {
      storage.removeItem('token')
    },

    getCaptcha () {
      // to fetch data
    },

    initApp ({ commit }) {
      Promise.all([request('userInfo'), request('initApp')]).then(res => {
        commit('setUserInfo', res[0].payload)
        commit('setMessages', res[1].payload.messages)
        commit('setNav', res[1].payload.nav)
      })
    }
  }
}
