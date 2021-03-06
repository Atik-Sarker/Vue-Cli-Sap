
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        inventorys:[],
        carts: []
    },
    getters: {
        getInventory(state){
            return state.inventorys
        },
        GetCart(state){
            return state.carts
        }
    },
    mutations:{
        setInventory(state, payload){
            return state.inventorys = payload
        },
        addToCart(state, payload){
            return state.carts.push(payload)
        },
        removeItem(state, payload){
            return state.carts.splice(payload, 1)
        }
    }
})