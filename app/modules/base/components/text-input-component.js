import Vue from 'vue';

Vue.component('text-input', {
  props: {
    value: {
      required: true
    },
    label: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  data: function() {
    return {
    }
  },
  template: require('./text-input-component.html')
})
