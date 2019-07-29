import Vue from 'vue'
import VueRouter from 'vue-router'
import inventory from '@/components/view/inventory'
import Hello from '@/components/Hello'
import Home from '@/components/view/Home'
import ItemDetails from '@/components/view/ItemDetails'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: inventory
        },
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/item/:id',
            name: 'Item',
            component: ItemDetails
        }
    ]
})
