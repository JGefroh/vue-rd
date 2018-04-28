import Vue from 'vue';

Vue.component('button-action', {
  props: {
    label: String,
    action: Function
  },
  data: function() {
    return {
    }
  },
  template: require('./button-action-component.html')
})
