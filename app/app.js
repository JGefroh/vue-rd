import Vue from 'vue';

require("styles/app");

console.info("Hello world")
require('modules/components/components-module')
require('modules/users/users-module')
require('modules/services/services-module')
import UsersService from 'modules/users/users-service'

var app = new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
    description: 'This is the App Description',
    quote: 'This is my quote. There are many like it but this one is mine.',
    quoteAuthor: 'Joseph Gefroh',
    whatDidYouType: '',
    whatDidYouType2: '',
    objects: [
      {label: "Alpha", value: 'A'},
      {label: "Bravo", value: 'B'},
      {label: "Charlie", value: 'C'},
      {label: "Null", value: null},
    ]
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
  }
})
