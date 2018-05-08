import Vue from 'vue';
import ModalService from 'modules/base/services/modals/modals-service'
Vue.component('examples-modal-page', {
  template: require('./examples-modal-page.html'),
  methods: {
    launchModal() {
      ModalService.launch({
        component: 'examples-form-page'
      });
    }
  },
});
