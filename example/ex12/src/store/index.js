import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import modProvider from './provider'
import modCommon from './common'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        common: modCommon,
        provider: modProvider
    },
    plugins: [(new VuexPersistence({
        storage: window.localStorage
    })).plugin]
})
