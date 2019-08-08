
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
export const store = new Vuex.Store({
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
    }
})