
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        inventory:[],
        cart: []
    },
    getters: {
        GetInventory(state){
            return state.inventory
        },
        GetCart(state){
            return state.cart
        }
    },
    mutations:{
        addToCart(state, payload){
            return state.cart.push(payload)
        }
    }
})