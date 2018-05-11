import Vue from 'vue';
import UsersService from 'modules/users/users-service';

Vue.component('examples-advanced-page', {
  template: require('./examples-advanced-page.html'),
  data() {
    return {
      user: {},
      user2: {},
      user3: {},
      level: 3,
      console: console,
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
    }
  },
});
