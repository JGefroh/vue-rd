import Vue from 'vue';

Vue.component('embedded-form', {
  props: {
    value: Object
  },
  data: function() {
    return {
    }
  },
  methods: {
    childReset() {
      Object.keys(this.value).forEach((key) => {
        this.value[key] = null;
      });
    }
  },
  template: require('./embedded-form-component.html')
})
