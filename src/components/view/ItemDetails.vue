<template>
    <div class="row" v-if="! lodding">
        <div class="col-lg-8 col-lg-offset-2">
            <div class="card">
                <div class="card-body">
                    <img class="card-img-top" v-bind:src="item.image" v-bind:alt="item.name">
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{item.name}}</h5>
                    <p class="card-text">Price - ${{item.price}}</p>
                    <p class="card-text">{{item.description}}</p>
                </div>
                <a @click="addToCart(item)" class="btn btn-info">Add to Cart</a>
            </div>
        </div>

    </div>
    <h1 v-else>Lodding.....</h1>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                lodding: true,
                item: null
            }
        },
        mounted(){
            this.fatchItem();
        },
        methods:{
            fatchItem(){
                axios.get('http://localhost:3000/item/' + this.$route.params.id).then(response =>{

                    this.item = response.data;
                    this.lodding = false;
                })
            },
            addToCart(index){
                return this.$store.commit('addToCart', index)
            },
        }
    }
</script>
<style>

</style>