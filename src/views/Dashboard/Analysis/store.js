import ajax from '@/ajax'

let payloadInterval, trafficInterval

const state = {
    salesChartData: [],
    visitsChartData: [],
    paymentsChartData: [],
    activityChartData: [],
    areaVisitsChartData: [],
    trafficChartDate: [],
    payloadChartDate: [0],
    visitsTypeChartData: []
}

const getters = {

}

const mutations = {
    setSalesChartData(store, value) {
        store.salesChartData = value
    },
    
    setVisitsChartData(store, value) {
        store.visitsChartData = value
    },
    
    setPaymentsChartData(store, value) {
        store.paymentsChartData = value
    },

    setActivityChartData(store, value) {
        store.activityChartData = value
    },

    setAreaVisitsChartData(store, value) {
        store.areaVisitsChartData = value
    },

    setTrafficChartDate(store, value) {
        store.trafficChartDate = value
    },

    setPayloadChartDate(store, value) {
        store.payloadChartDate = value
    },

    setVisitsTypeChartData(store, value) {
        store.visitsTypeChartData = value
    }
}

const actions = {
    initAnalysis({commit}) {
        ajax('initAnalysisCard').then( ({payload}) => {
            commit('setSalesChartData', payload.salesChartData)
            commit('setVisitsChartData', payload.visitsChartData)
            commit('setPaymentsChartData', payload.paymentsChartData)
            commit('setActivityChartData', payload.activityChartData)
            commit('setTrafficChartDate', payload.trafficChartDate)
            commit('setPayloadChartDate', payload.payloadChartDate)
            commit('setVisitsTypeChartData', payload.visitsTypeChartData)
        })
        ajax('initAnalysisMap').then( ({payload}) => {
            commit('setAreaVisitsChartData', payload.areaVisitsData)
        })
    },

    getMapDate({commit}) {
        ajax('initAnalysisMap').then( ({payload}) => {
            commit('setAreaVisitsChartData', payload.areaVisitsData)
        })
    }
}

export default {
    namespace: 'analysis',
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
