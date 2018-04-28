import Vue from 'vue';

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
      users: []
    }
  },
  methods: {
    onClick1(params) {
      alert('clicked me -' + params);
    },
    loadUsers() {
      UsersService.index().then((payload) => {
        alert(JSON.stringify(payload.data))
        this.users = payload.data;
      })
    }
  },
});
