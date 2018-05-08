require('./examples-advanced-page');
require('./examples-basic-page');
require('./examples-form-page');
require('./examples-modal-page');

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
  },
  {
    path: '/examples/form',
    name: 'form',
    component: {template: '<examples-form-page></examples-form-page>'}
  },
  {
    path: '/examples/modal',
    name: 'modal',
    component: {template: '<examples-modal-page></examples-modal-page>'}
  }
];

export default routes;
