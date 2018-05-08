import Vue from 'vue';

Vue.component('zip-input', {
  template: require('./zip-input-component.html'),
  props: {
    value: {
      required: true
    },
    autocomplete: String,
    label: String,
    placeholder: String
  }
})
