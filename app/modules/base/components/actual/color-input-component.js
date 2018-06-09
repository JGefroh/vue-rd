import Vue from 'vue';

Vue.component('color-input', {
  template: require('./color-input-component.html'),
  props: {
    value: {
      required: true
    },
    colors: {
      required: true,
      type: Array
    },
    label: String
  },
  data() {
    return {};
  },
  methods: {
  }
})
