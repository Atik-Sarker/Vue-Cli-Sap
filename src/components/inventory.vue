<template>

        <div class="row">
            <div class="col-lg-3"  v-for="(item , index) in items" :key="index">
                <div class="card">
                    <img class="card-img-top" v-bind:src="item.image" v-bind:alt="item.name">
                    <div class="card-body">
                        <h5 class="card-title">{{item.name}}</h5>
                        <p class="card-text">{{item.price}}</p>
                        <a @click="addToCart(item)" class="btn btn-info">Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
    export default {
        // received data from parent component using props
        props : ['items'],
        methods:{
            // send event chaild to parent component
            addToCart(item){
                return this.$emit('newItemAdded', item)
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>