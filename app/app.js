import Vue from 'vue';

require("styles/app");

console.info("Hello world")
require('modules/components/components-module.js')
var app = new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
    description: 'This is the App Description',
    quote: 'This is my quote. There are many like it but this one is mine.',
    quoteAuthor: 'Joseph Gefroh',
    whatDidYouType: '',
    whatDidYouType2: '' 
  }
})
