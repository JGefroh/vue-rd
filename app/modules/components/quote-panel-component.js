import Vue from 'vue';
// console.info(require('./quote-panel-component.html'))
Vue.component('quote-panel', {
  props: ['quote', 'quoteAuthor'],
  data: function() {
    return {
    }
  },
  template: require('./quote-panel-component.html')
})
