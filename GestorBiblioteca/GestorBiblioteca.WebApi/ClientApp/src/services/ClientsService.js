import BaseService from './BaseService';

export default class loanService extends BaseService {

    GetClients() {
        return super.Get('/Client');
    }

    GetClientById(id) {
        return super.GetResource('/Client', id);
    }

    GetClientByDni(dni) {
        return super.Get('/Client/GetByDni/' + dni);
    }

    AddClient(client) {
      
        return super.Post('/Client', client);
    }

    UpdateClient(client) {
        return super.Put('/Client', client);
    }

    DeleteClient(id) {
        return super.Delete('/Client', id);
    }

}
