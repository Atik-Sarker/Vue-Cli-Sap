<template>
    <div id="app">
        <NavBar></NavBar>

        <router-link to="/">Home</router-link>
        <router-link to="/Hello">Hello</router-link>
        <router-link :to="{path: '/item/1'}">Test 1</router-link>

        <div class="container pt-3">
            <div class="row">
                <div class="col-lg-9">
                    <router-view></router-view>
                     <!--<Inventory :items="items"  @newItemAdded="addCartItem"></Inventory>-->
                </div>
                <div class="col-lg-3">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from './components/navbar';
    import Inventory from './components/view/inventory';
    import Cart from './components/cart';
    import data from './../data';
    import axios from 'axios'
    export default {

        components: {
            NavBar,
            Inventory,
            Cart,
        },
        data(){
            return {
                items : [],
                carts : []
            }
        },
        mounted(){
            this.items = data;
        },
        methods:{
            // search product from items

        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
