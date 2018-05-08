import Vue from 'vue';
//Provides standard communication protocol for API requests, including common tasks and parsing.
class ModalService {
  constructor() {
  }

}

ModalService.launch = function(options) {
  let modalSlotId = `base-modal-slot-${ModalService.modalNumber}`;
  let modalId = `base-modal-${ModalService.modalNumber}`;

  let modalSlotElement = document.createElement('div');
  modalSlotElement.setAttribute('id', modalSlotId);
  document.getElementById('app').appendChild(modalSlotElement);

  const VueModal = Vue.extend({
    template: `<base-modal id="${modalId}" v-bind:cancelModal="cancelModal" v-bind:options="options"></base-modal>`,
    data() {
      return {
        options: options
      };
    },
    methods: {
      cancelModal() {
        this.$destroy(true);
        removeElement();
      }
    }
  });

  function removeElement() {
    let element = document.getElementById(modalId);
    element.parentNode.removeChild(element);
  }


  const vueModalInstance = new VueModal({});
  const vm = vueModalInstance.$mount(`#${modalSlotId}`);
  ModalService.modalNumber++;
}
ModalService.modalNumber = 1500;

export default ModalService;
