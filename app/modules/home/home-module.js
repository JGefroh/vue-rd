require('./home-page');

const routes = [
  {
    path: '/',
    components: {
      default: {template: '<home-page></home-page>'}
    }
  }
]
export default routes;
