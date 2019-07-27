<template>
    <div id="app">
        <NavBar></NavBar>
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
            //add item on the cart
            addCartItem(item){
               return this.carts.push(item)
            },
            // remove item from cart
            itemRemove(item){
                return this.carts.splice(item, 1)
                // alert(item);
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
