<template>

        <div class="row" v-if="! lodding">
            <div class="col-lg-3"  v-for="(item , index) in items" :key="index">
                    <div class="card">
                         <router-link :to="{path: 'item/' + item.id}">
                            <img class="card-img-top" v-bind:src="item.image" v-bind:alt="item.name">
                        </router-link>
                        <div class="card-body">
                            <h5 class="card-title">{{item.name}}</h5>
                            <p class="card-text">{{item.price}}</p>
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
        // received data from parent component using props
        // props : ['items'],
        data(){
          return {
              lodding: true,
              items: []
          }
        },
        mounted(){
            this.fatchInventory()
        },
        methods:{
            // send event chaild to parent component
            addToCart(item){
                return this.$emit('newItemAdded', item)
            },
            fatchInventory(){
                var self = this;
                axios.get('http://localhost:3000/items').then(response =>{

                        self.lodding = false;
                        self.items = response.data;

                    // setTimeout(function(){
                    //     self.lodding = false;
                    //     self.items = response.data;
                    // }, 3000);

                })
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>