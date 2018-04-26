import Vue from 'vue';

require("styles/app");

console.info("Hello world")
require('modules/components/components-module')
require('modules/filters/filters-module')
require('modules/services/services-module')

require('modules/users/users-module')
import UsersService from 'modules/users/users-service'

var app = new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
    description: 'This is a gallery of proof of concepts for Vue. You can utilize these techniques to build your web applications.',
    quote: 'This is my quote. There are many like it but this one is mine.',
    quoteAuthor: 'Joseph Gefroh',
    whatDidYouType: '',
    whatDidYouType2: '',
    objects: [
      {id: 1, label: "Alpha", value: 'A'},
      {id: 2, label: "Bravo", value: 'B'},
      {id: 3, label: "Charlie", value: 'C'},
      {id: 4, label: "Null", value: null},
    ],
    color: '',
    big: false
  },
  methods: {
    onClick1: function(params) {
      alert('clicked me -' + params);
    },
    loadUsers: function() {
      UsersService.index().then(function(payload) {
        alert(JSON.stringify(payload.data))
      })
    }
  },
})
