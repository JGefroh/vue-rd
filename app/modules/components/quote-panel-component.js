import Vue from 'vue';

Vue.component('quote-panel', {
  props: {
    quote: String,
    quoteAuthor: String
  },
  data: function() {
    return {
      inputQuoteAuthor: this.quoteAuthor
    }
  },
  template: require('./quote-panel-component.html')
})
