import { request } from '@/services'

export default {
  state: {},

  mutations: {},

  getters: {},

  actions: {
    submitForm (context, payload) {
      return request('repository', payload)
    }
  }
}
