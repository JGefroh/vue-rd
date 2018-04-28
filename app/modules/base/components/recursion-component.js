import Vue from 'vue';

Vue.component('recursion', {
  props: {
    level: 0
  },
  template: require('./recursion-component.html')
})
