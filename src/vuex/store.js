import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      isMobile: true,
      isDesktop: false,
      cart: [],
      searchValue: '',

      products: [
          {
              "id": 1,
              "image": [7,71],
              "name": "BlackBerry Classic Black",
              "color": "black",
              "price": 650,
              "discount": 20,
              "article": "T1",
              "available": true,
              "category": "BlackBerry",
              "count": 20
          },
          {
              "id": 2,
              "image": [3,31,32],
              "name": "Samsung A-18",
              "color": "blue",
              "price": 200,
              "article": "T2",
              "available": true,
              "category": "Android",
              "count": 25
          },
          {
              "id": 4,
              "image": [8,81],
              "name": "Apple iPhone 11 Pro Max 64GB Space Gray",
              "color": "gray",
              "price": 1340,
              "article": "T4",
              "available": true,
              "category": "iOS",
              "count": 4
          },
          {
              "id": 5,
              "image": [4,41,42,43],
              "name": "Motorola G8 4/64GB Pearl White",
              "color": "white",
              "price": 210,
              "article": "T11",
              "available": true,
              "category": "Android",
              "count": 20
          },
          {
              "id": 7,
              "image": [5,51,52],
              "name": "Nokia 2.3 2/32GB Charcoal",
              "color": "charcoal",
              "price": 249,
              "article": "T34",
              "available": true,
              "category": "Android",
              "count": 3
          },
          {
              "id": 8,
              "image": [2,21],
              "name": "Nokia 2 2/32GB SX",
              "color": "white",
              "price": 159,
              "article": "T45",
              "available": true,
              "category": "Android",
              "count": 10
          },
          {
              "id": 9,
              "image": [6,61,62],
              "name": "Apple iPhone 10 64GB Black",
              "color": "black",
              "price": 910,
              "discount": 10,
              "article": "T4-10",
              "available": true,
              "category": "iOS",
              "count": 10
          },
          {
              "id": 3,
              "image": [1,11,12],
              "name": "Samsung A-51",
              "color": "green",
              "price": 250,
              "article": "T3",
              "available": false,
              "category": "Android",
              "count": 0
          }
      ]
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
          // return axios('http://localhost:3000/products', {
          //     method: "GET"
          // })
          //     .then(products => {
          //         commit('setProductsToState', products.data);
          //         return products;
          //     })
          //     .catch (e => {
          //         console.log(e);
          //         return e;
          //     });
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
