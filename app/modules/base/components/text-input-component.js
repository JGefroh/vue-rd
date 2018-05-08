import Vue from 'vue';

Vue.component('text-input', {
  template: require('./text-input-component.html'),
  props: {
    value: {
      required: true
    },
    autocomplete: String,
    label: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    }
  }
})
