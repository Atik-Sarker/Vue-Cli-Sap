<template>
    <ul class="list-group">
        <li class="list-group-item">
            <span class="item-name">Name</span>
            <span class="item-price float-right">Price</span>
        </li>
        <li class="list-group-item" v-for="(item, index) in carts" :key="index">
            <button @click="removeItem(item)" class="btn btn-danger"> - </button>
            <span class="item-name">{{item.name}}</span>
            <span class="item-price float-right">${{item.price}}</span>
        </li>
        <li class="list-group-item">
            <span class="item-name">Total</span>
            <span class="item-price float-right">$ {{TotalPrice}}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        //received data from parent component using props
        // props : ['carts'],
        // calculate cart total price
        computed:{
            carts(){
              return this.$store.getters.GetCart
            },
            TotalPrice(){
                let total = 0;
                this.carts.forEach(item => {
                    total += parseFloat(item.price)
                });
                return  total.toFixed(2);
            }
        },
        methods: {
            // send commit vuex state management
            removeItem(index){
                return this.$store.commit('removeItem', index)
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
