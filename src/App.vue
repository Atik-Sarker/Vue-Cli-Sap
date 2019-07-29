<template>
    <div id="app">
        <NavBar  @search="search"></NavBar>
        <router-view></router-view>

        <router-link to="/">Home</router-link>
        <router-link to="Hello">Hello</router-link>
        <router-link :to="{path: '/test/1'}">Test 1</router-link>
        <router-link :to="{path: '/test/2'}">Test 3</router-link>
        <router-link :to="{path: '/test/3'}">Test 3</router-link>
        <div class="container pt-3">
            <div class="row">
                <div class="col-lg-9">
                     <Inventory :items="items"  @newItemAdded="addCartItem"></Inventory>
                </div>
                <div class="col-lg-3">
                    <Cart :carts="carts" @remove="itemRemove"></Cart>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from './components/navbar';
    import Inventory from './components/inventory';
    import Cart from './components/cart';
    import data from './../data';
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
            search(keyword){
             return this.items = data.filter(item =>{
                   return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
               })
            },
            //add item on the cart
            addCartItem(item){

               return this.carts.push(item)
            },
            // remove item from cart
            itemRemove(item){
                return this.carts.splice(item, 1)
                // alert(item);
            },
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
