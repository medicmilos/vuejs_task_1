import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [
      { id: 1, active: true },
      { id: 2, active: true },
      { id: 3, active: false },
      { id: 4, active: true },
      { id: 5, active: false }
    ]
  },
  getters: {},
  mutations: {},
  actions: {
    getListItems(context) {
      return { data: context.state.data }
    }
  },
  plugins: [],
  mixins: {}
})
