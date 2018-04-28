import Vue from 'vue';
import VueRouter from 'vue-router';

// Manifests
//Styles manifest
require("styles/app");

//Module manifest (base)
require('modules/base/components/components-module')
require('modules/base/filters/filters-module')
require('modules/base/services/services-module')

//Module manifest (app)
require('modules/examples/examples-module')
require('modules/home/home-module')
require('modules/users/users-module')


//Routing
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {path: '/', component: {template: '<home-page></home-page>'}},
    {path: '/examples/basic', name: 'basic', component: {template: '<examples-basic-page></examples-basic-page>'}},
    {path: '/examples/advanced/:uid', name: 'advanced', component: {template: '<examples-advanced-page></examples-advanced-page>'}}
  ]
});

//App Declaration
const app = new Vue({
  el: '#app',
  router: router
});
