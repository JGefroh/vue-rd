import Vue from 'vue';

Vue.component('examples-modal', {
  template: require('./examples-modal-component.html'),
  props: {
    acceptModal: Function,
    cancelModal: Function
  },
  data() {
    return {
      amount: 0
    }
  }
});
