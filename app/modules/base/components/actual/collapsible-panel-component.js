import Vue from 'vue';

Vue.component('collapsible-panel', {
  template: require('./collapsible-panel-component.html'),
  props: {
    header: String,
    isOpen: {
      default: true,
      type: Boolean
    }
  },
  data() {
    return {
      internalIsOpen: this.isOpen
    }
  }
});
