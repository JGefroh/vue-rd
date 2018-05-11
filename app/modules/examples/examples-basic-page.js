import Vue from 'vue';
import UsersService from 'modules/users/users-service';
import ModalService from 'modules/base/services/modals/modals-service'

Vue.component('examples-basic-page', {
  template: require('./examples-basic-page.html'),
  data() {
    return {
      title: 'Hello World',
      description: 'This is a gallery of proof of concepts for Vue. You can utilize these techniques to build your web applications.',
      quote: 'This is my quote. There are many like it but this one is mine.',
      quoteAuthor: 'Joseph Gefroh',
      whatDidYouType: '',
      whatDidYouType2: '',
      objects: [
        {id: 1, label: "Alpha", value: 'A'},
        {id: 2, label: "Bravo", value: 'B'},
        {id: 3, label: "Charlie", value: 'C'},
        {id: 4, label: "Null", value: null},
      ],
      color: '',
      big: false,
      users: [],
      myobject: {
        field3: 'poato'
      }
    }
  },
  methods: {
    onClick1(params) {
      alert('These params were passed from the child:' + params);
    },
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
    },
    loadUsers() {
      UsersService.index().then((payload) => {
        alert(JSON.stringify(payload.data))
        this.users = payload.data;
      })
    }
  },
});
