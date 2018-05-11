import Vue from 'vue';
import ModalService from 'modules/base/services/modals/modals-service'
Vue.component('examples-modal-page', {
  template: require('./examples-modal-page.html'),
  data() {
    return {
      modalValue: null
    }
  },
  methods: {
    launchModal() {
      ModalService.launch({
          component: 'examples-basic-page'
        },
        (value) => {
          console.info("Accepted");
          this.modalValue = value;
        },
        (value) =>  {
          console.info("Cancelled");
        });
    }
  },
});
