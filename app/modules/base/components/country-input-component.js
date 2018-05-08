import Vue from 'vue';

Vue.component('country-input', {
  template: require('./country-input-component.html'),
  props: {
    value: {
      required: true
    },
    autocomplete: String,
    label: String,
    placeholder: String
  },
  data() {
    return {
      options: [{
        label: 'United States',
        value: 'US'
      },
      {
        label: 'Canada',
        value: 'CA'
      }]
    }
  }
})
