import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('api');


export default new Vuex.Store({
  state: {
    content: [],
    search: ''
  },
  mutations: {
    getContent(state, newContent) {
      state.content = newContent
    }
  },
  actions: {
    getContent ({ commit }) {
      if (myParam) {
        axios(`https://corsproxy.io/?https%3A%2F%2Fwww.eventim-light.com%2Fde%2Fa%2F${myParam}%2Fapi%2Fevent`)
        .then(response => {commit('getContent', response.data)
        })
      }
    }
  },
  getters: {
    formatPrice (price) {
      if (price.currency === "EUR") return `${price.value} €`
      else return `${price.value} ${price.currency}`
    },
  },
  modules: {
  }
})
