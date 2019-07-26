<template>
    <div id="app">
        <NavBar></NavBar>
        <div class="container pt-3">
            <div class="row">
                <div class="col-lg-9">
                     <Inventory :items="items"></Inventory>
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
            }
        },
        mounted(){
            this.items = data;
            console.log(this.items)
        }
    }
</script>

<style>

</style>
