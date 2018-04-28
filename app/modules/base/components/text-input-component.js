import Vue from 'vue';

Vue.component('text-input', {
  props: {
    label: String,
    value: String
  },
  data: function() {
    return {
    }
  },
  template: require('./text-input-component.html')
})
