import BaseService from './BaseService';

export default class ClientsService extends BaseService {

    GetClients() {
        return super.Get('/Client');
    }

    GetClientById(id) {
        return super.GetResource('/Client', id);
    }

    AddClient(cliente) {
        debugger;
        return super.Post('/Client', cliente);
    }

    UpdateClient(cliente) {
        return super.Put('/Client', cliente);
    }

    DeleteClient(id) {
        return super.Delete('/Client', id);
    }

}
