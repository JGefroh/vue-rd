require('./examples-basic-page');
require('./examples-advanced-page');

const routes = [
  {
    path: '/examples/basic',
    name: 'basic',
    component: {template: '<examples-basic-page></examples-basic-page>'}
  },
  {
    path: '/examples/advanced/:uid',
    name: 'advanced',
    component: {template: '<examples-advanced-page></examples-advanced-page>'}
  }
];

export default routes;
