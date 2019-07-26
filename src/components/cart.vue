<template>
    <ul class="list-group">
        <li class="list-group-item">
            <span class="item-name">Name</span>
            <span class="item-price float-right">Price</span>
        </li>
        <li class="list-group-item" v-for="(cart, index) in carts" :key="index">
            <span class="item-name">{{cart.name}}</span>
            <span class="item-price float-right">${{cart.price}}</span>
        </li>
        <li class="list-group-item">
            <span class="item-name">Total</span>
            <span class="item-price float-right">$ {{TotalPrice}}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        props : ['carts'],

        computed:{
            TotalPrice(){
                let total = 0;
                this.carts.forEach(item => {
                    total += parseFloat(item.price)
                });
                return  total.toFixed(2);

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
