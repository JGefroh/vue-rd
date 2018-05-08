import Vue from 'vue';

Vue.component('base-modal', {
  template: require('./base-modal-component.html'),
  props: {
    acceptModal: Function,
    cancelModal: Function,
    options: {
      required: true
    }
  },
  created() {
    console.info(this.options.template);
  }
})
