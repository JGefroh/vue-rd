import Vue from 'vue';
import VueRouter from 'vue-router';

// Manifests
//Styles manifest
require("styles/app");

//Module manifest (base)
require('modules/base/components/components-module')
require('modules/base/filters/filters-module')
require('modules/base/services/services-module')


let routes = [
];

//Module manifest (app)
import examplesRoutes from 'modules/examples/examples-module';
import homeRoutes from 'modules/home/home-module';
import usersRoutes from 'modules/users/users-module';

routes = routes.concat(
  examplesRoutes,
  homeRoutes,
  usersRoutes
)

//Routing
Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes.filter(route => route.path)
});

//App Declaration
const app = new Vue({
  el: '#app',
  router: router
});
