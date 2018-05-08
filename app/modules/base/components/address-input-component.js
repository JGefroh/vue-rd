import Vue from 'vue';

Vue.component('address-input', {
  template: require('./address-input-component.html'),
  props: {
    value: {
      required: true
    }
  }
})
