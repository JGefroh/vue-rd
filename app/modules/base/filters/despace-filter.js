import Vue from 'vue';

Vue.filter('despace', function (value) {
  if (value) {
    return value.replace(' ', '');
  }
});
