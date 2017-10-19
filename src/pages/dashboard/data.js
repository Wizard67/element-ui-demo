const state = {
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }]
    }
}

const getters = {

}

const actions = {

}

const mutations = {

}

export default {
    namespace: 'dashboard',
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}