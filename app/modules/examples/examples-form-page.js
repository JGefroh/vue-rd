import Vue from 'vue';
import UsersService from 'modules/users/users-service';

Vue.component('examples-form-page', {
  template: require('./examples-form-page.html'),
  data() {
    return {
      input: {
        address: {
        }
      }
    }
  },
  methods: {
  },
});
