import Vue from 'vue';

Vue.component('base-modal', {
  template: require('./base-modal-component.html'),
  props: {
    cancelModal: Function,
    options: {
      required: true
    }
  },
  methods: {
    cancel() {
      this.cancelModal();
    }
  },
  created() {
    console.info(this.options.template);
  }
})
