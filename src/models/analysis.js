import { request } from '@/services'

export default {
  state: {
    isFetchDate: false,
    chartCardDate: {
      sales: [],
      visits: [],
      payments: [],
      activity: [],
      traffic: [],
      payload: [0],
      visitsType: []
    },
    mapCardData: []
  },

  getters: {},

  mutations: {
    toggleFetchDateStatus (store) {
      store.isFetchDate = !store.isFetchDate
    },
    setChartCardDate (store, value) {
      store.chartCardDate = {
        sales: value.salesChartData,
        visits: value.visitsChartData,
        payments: value.paymentsChartData,
        activity: value.activityChartData,
        traffic: value.trafficChartDate,
        payload: value.payloadChartDate,
        visitsType: value.visitsTypeChartData
      }
    },
    setMapCardData (store, value) {
      store.mapCardData = value
    }
  },

  actions: {
    initAnalysis ({ commit, state }) {
      if (state.isFetchDate) return

      Promise.all([request('initAnalysisCard'), request('initAnalysisMap')]).then(
        res => {
          commit('setChartCardDate', res[0].payload)
          commit('setMapCardData', res[1].payload.areaVisitsData)
          commit('toggleFetchDateStatus')
        }
      )
    },

    getMapDate ({ commit }) {
      request('initAnalysisMap').then(({ payload }) => {
        commit('setMapCardData', payload.areaVisitsData)
      })
    }
  }
}
