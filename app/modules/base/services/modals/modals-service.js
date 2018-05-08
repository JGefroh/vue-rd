import Vue from 'vue';
//Provides a consistent API and abstraction layer to launch components as modals.
class ModalService {
  constructor() {
  }

}

ModalService.launch = function(options, onAccept, onCancel) {
  let modalSlotId = `base-modal-slot-${ModalService.modalNumber}`;
  let modalId = `base-modal-${ModalService.modalNumber}`;

  let modalSlotElement = document.createElement('div');
  modalSlotElement.setAttribute('id', modalSlotId);
  document.getElementById('app').appendChild(modalSlotElement);

  const VueModal = Vue.extend({
    template: `<base-modal id="${modalId}" v-bind:cancel-modal="cancelModal" v-bind:accept-modal="acceptModal" v-bind:options="options"></base-modal>`,
    data() {
      return {
        options: options
      };
    },
    methods: {
      acceptModal(value) {
        this.$destroy(true);
        removeElement();
        if (onAccept) {
          onAccept(value)
        }
      },
      cancelModal(value) {
        this.$destroy(true);
        removeElement();
        if (onCancel) {
          onCancel(value)
        }
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
