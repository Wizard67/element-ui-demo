import { request } from '@/services'
import storage from '@/utils/storage'

export default {
  state: {
    userName: 'UserName',
    avatar: require('@/assets/images/avatar.png'),
    nav: []
  },

  mutations: {
    setUserName (store, value) {
      store.userName = value
    },
    setAvatar (store, value) {
      store.avatar = value
    },
    setNav (store, value) {
      store.nav = value
    }
  },

  getters: {
    userName (state) {
      return storage.getItem('userName') || state.userName
    },
    avatar (state) {
      return storage.getItem('avatar') || state.avatar
    },
    nav (state) {
      return JSON.parse(storage.getItem('nav')) || state.nav
    }
  },

  actions: {
    login ({ commit }, { autoLogin, ...params }) {
      autoLogin ? storage.init('local') : storage.init('session')

      return new Promise((resolve, reject) => {
        request('login', params)
          .then(res => {
            if (res.status === 200) {
              storage.setItem('token', res.payload.token)
              storage.setItem('userName', res.payload.userName)
              storage.setItem('avatar', res.payload.avatar)
              storage.setItem('nav', JSON.stringify(res.payload.nav))
              resolve(res)
            } else {
              reject(res)
            }
          })
          .catch(err => reject(err))
      })
    },

    logout () {
      storage.removeItem('token')
      storage.removeItem('userName')
      storage.removeItem('avatar')
      storage.removeItem('nav')
    },

    getCaptcha () {
      // to fetch data
    }
  }
}
