# Super Shop

> A Vue.js project

## Build Setup

# Download Vue cli webpack project
vue init webpack my-project

``` bash

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
# install bootstrap jquery popper.js
npm install bootstrap jquery popper.js
or 
npm i bootstrap jquery popper.js
# Add to src/main.js: 
window.$ = window.jquery = require('jquery');
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

# install Vue Router
```
# npm install vue-router

Register vue Router on main.js file
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

# create router folder and web.js file and create route onweb js file and create  hello.vue  for '/' route

```







For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
