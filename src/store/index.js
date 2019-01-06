import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import uesr from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    uesr
  },
  getters
})

export default store
