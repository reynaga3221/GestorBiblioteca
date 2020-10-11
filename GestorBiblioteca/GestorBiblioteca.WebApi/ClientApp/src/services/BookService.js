import BaseService from './BaseService';

export default class BookService extends BaseService {

    GetBooks() {
        return super.Get('/Book');
    }

    GetBookById(id) {
        return super.GetResource('/Book', id);
    }

    AddBook(book) {
        debugger;
        return super.Post('/Book', book);
    }

    UpdateBook(book) {
        return super.Put('/Book', book);
    }

    DeleteBook(id) {
        return super.Delete('/Book', id);
    }

}
