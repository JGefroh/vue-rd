import Vue from 'vue';

Vue.component('text-input', {
  props: {
    value: {
      required: true
    },
    label: String,
    placeholder: String,
  },
  data: function() {
    return {
    }
  },
  template: require('./text-input-component.html')
})
