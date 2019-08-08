
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        inventory:[],
        carts: []
    },
    getters: {
        GetInventory(state){
            return state.inventory
        },
        GetCart(state){
            return state.carts
        }
    },
    mutations:{
        addToCart(state, payload){
            return state.carts.push(payload)
        },
        removeItem(state, payload){
            return state.carts.splice(payload, 1)
        }
    }
})