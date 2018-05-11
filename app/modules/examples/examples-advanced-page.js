import Vue from 'vue';
import UsersService from 'modules/users/users-service';

Vue.prototype.my_global_console = console

Vue.component('examples-advanced-page', {
  template: require('./examples-advanced-page.html'),
  data() {
    return {
      allowed: false,
      allowed2: false,
      allowed3: false,
      user: {},
      user2: {},
      user3: {},
      payload:{
        name: ''
      },
      level: 3,
      objects: [
        {id: 2}, {id: 3}, {id: 4}
      ],
      objectNamesByID: {
        2: 'Joseph',
        3: 'Josephine',
        4: 'Joey'
      }
    }
  },
  mounted() {
    UsersService.show(1).then((response) => {
      this.user = response.data;
    });
    UsersService.show(this.$route.query.id).then((response) => {
      this.user2 = response.data;
    });
    UsersService.show(this.$route.params.uid).then((response) => {
      this.user3 = response.data;
    });
  },
  methods: {
    getNameForID(element) {
      return this.objectNamesByID[element.id];
    },
    getUserNameAsync(id) {
      UsersService.show(id).then((response) => {
        this.payload.name = response.data.first_name;
        // this.payload.last_name = response.data.last_name; //Vue won't know to trigger a change here.
        Vue.set(this.payload, 'last_name', response.data.last_name);
      });
    },
    print(message) {
      console.info(message);
    }
  },
});
