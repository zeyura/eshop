import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      products: [],

  },

  actions: {
      getProducts({commit}){
          return axios('http://localhost:3000/products', {
              method: "GET"
          })
              .then(products => {
                  commit('setProductsToState', products.data);
                  return products;
              })
              .catch (e => {
                  console.log(e);
                  return e;
              });
      }
  },

  mutations: {
      setProductsToState(state,products) {
          state.products = products;
      }

  },

  getters: {
      products(state) {
        return state.products;
      }
  }
})
