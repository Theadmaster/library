import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import user from './modules/user'
import menu from './modules/menu'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user,
        menu
    },
    getters
})

export default store