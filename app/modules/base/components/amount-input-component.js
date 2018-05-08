import Vue from 'vue';

Vue.component('amount-input', {
  template: require('./amount-input-component.html'),
  props: {
    value: {
      required: true
    },
    autocomplete: String,
    label: String,
    placeholder: {
      type: String,
      default: '0.00'
    }
  },
  methods: {
    convertToValidAmount(value) {
      return value;
    }
  }
})
