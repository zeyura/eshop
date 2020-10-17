import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      isMobile: true,
      isDesktop: false,
      products: [],
      cart: [],
      searchValue: ''
  },

  actions: {
      setSearchValue({commit}, value) {
          commit('setSearchValueToState', value);
      },
      setMobile({commit}) {
          commit('switchMobile');
      },
      setDesktop({commit}) {
          commit('switchDesktop');
      },
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
      },

      addProductToCart({commit}, product) {
          commit('setCart', product);
      },
      deleteFromCart({commit}, index) {
          commit('removeFromCart', index);
      },

      incrementCartItem({commit}, index){
          commit('incrementCartItem',index);
      },
      decrementCartItem({commit}, index){
          commit('decrementCartItem',index);
      },

  },

  mutations: {
      setSearchValueToState(state, value) {
          state.searchValue = value;
      },
      switchMobile(state) {
          state.isMobile  = true;
          state.isDesktop = false;
      },
      switchDesktop(state) {
          state.isMobile  = false;
          state.isDesktop = true;
      },

      setProductsToState(state,products) {
          state.products = products;
      },
      setCart(state, product) {
          if(state.cart.length) {
              let isProductExist = false;
              state.cart.map(item => {
                  if(item.article === product.article) {
                      isProductExist = true;
                      item.quantity++
                  }
              });
              if(!isProductExist) state.cart.push(product);
          } else {
              state.cart.push(product);
          }
      },
      removeFromCart(state, index) {
          state.cart.splice(index,1);
      },

      incrementCartItem(state,index) {
          state.cart[index].quantity++
      },
      decrementCartItem(state,index) {
          if(state.cart[index].quantity > 1) state.cart[index].quantity--
      }

  },

  getters: {
      searchValue(state) {
          return state.searchValue;
      },
      isMobile(state) {
          return state.isMobile;
      },
      isDesktop(state) {
          return state.isDesktop;
      },
      products(state) {
          return state.products;
      },
      cart(state) {
          return state.cart;
      },
      productsInCart(state) {
          return state.cart.map(p => p.id);
      },
  }
})
