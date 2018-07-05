import ajax from '@/ajax';

const state = {
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
};

const getters = {};

const mutations = {
  setChartCardDate(store, value) {
    store.chartCardDate = {
      sales: value.salesChartData,
      visits: value.visitsChartData,
      payments: value.paymentsChartData,
      activity: value.activityChartData,
      traffic: value.trafficChartDate,
      payload: value.payloadChartDate,
      visitsType: value.visitsTypeChartData
    };
  },
  setMapCardData(store, value) {
    store.mapCardData = value;
  }
};

const actions = {
  initAnalysis({ commit }) {
    ajax('initAnalysisCard').then(({ payload }) => {
      commit('setChartCardDate', payload);
    });
  },

  getMapDate({ commit }) {
    ajax('initAnalysisMap').then(({ payload }) => {
      commit('setMapCardData', payload.areaVisitsData);
    });
  }
};

export default {
  namespace: 'analysis',
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
