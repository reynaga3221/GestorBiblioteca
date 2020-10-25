import BaseService from './BaseService';

export default class UserService extends BaseService {

    Login(user) {        
        return super.Post('/User/Login', user);
    }

}
