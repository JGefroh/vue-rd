import Vue from 'vue';
import UsersService from 'modules/users/users-service';

Vue.component('examples-advanced-page', {
  template: require('./examples-advanced-page.html'),
  data() {
    return {
      user: {},
      user2: {},
      user3: {},
      level: 3
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
  },
});
