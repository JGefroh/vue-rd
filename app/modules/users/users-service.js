import ServiceBase from 'modules/base/services/service-base';

class UsersService extends ServiceBase {
  constructor() {
    super('user', 'users');
  }
}

export default new UsersService();
