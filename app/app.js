import Vue from 'vue';
import VueRouter from 'vue-router';

// Manifests
//Styles manifest
require("styles/app");

//Module manifest (base)
require('modules/base/components/components-module')
require('modules/base/filters/filters-module')
require('modules/base/services/services-module')


let mainParentRoute = {
    path: '*',
    components: {
      "root-router-view": {template: '<layout></layout>'}
    },
    children: [
    ]
}

//Module manifest (app)
import examplesRoutes from 'modules/examples/examples-module';
import homeRoutes from 'modules/home/home-module';
import layoutRoutes from 'modules/layouts/layouts-module';
import usersRoutes from 'modules/users/users-module';
import navigationRoutes from 'modules/navigation/navigation-module';

mainParentRoute.children = mainParentRoute.children.concat(
  examplesRoutes,
  homeRoutes,
  usersRoutes,
).filter(route => route.path)

let routes = [mainParentRoute];

//Routing
Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes
});

//App Declaration
const app = new Vue({
  el: '#app',
  router: router
});
