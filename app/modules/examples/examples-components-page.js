import Vue from 'vue';

Vue.prototype.my_global_console = console

Vue.component('examples-components-page', {
  template: require('./examples-components-page.html'),
  data() {
    return {
      colors: [{value: '#FF0000', label: 'Red'}, {value: '#00FF00', label: 'Green'}, {value: '#0000FF', label: 'Blue'}, ],
      selectedColor: {}
    }
  },
  mounted() {
  },
  methods: {
  },
});
