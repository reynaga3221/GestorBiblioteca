import BaseService from './BaseService';

export default class BookService extends BaseService {

    GetBooks() {
        return super.Get('/Book');
    }

    GetBookById(id) {
        return super.GetResource('/Book', id);
    }

    GetAllByTittle(title) {
        return super.Get('/Book/GetByTitle/' + title);
    }

    AddBook(book) {
  
        return super.Post('/Book', book);
    }

    UpdateBook(book) {
        return super.Put('/Book', book);
    }

    DeleteBook(id) {
        return super.Delete('/Book', id);
    }

}
