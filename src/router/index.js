import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Test from '@/components/Test'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        }
    ]
})
