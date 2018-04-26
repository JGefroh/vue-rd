import Vue from 'vue';

require("styles/app");

console.info("Hello world")
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World'
  }
})
