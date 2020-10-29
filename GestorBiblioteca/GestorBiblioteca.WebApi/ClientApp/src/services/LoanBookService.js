import BaseService from './BaseService';

export default class LoanBookService extends BaseService {

    GetAllByDni(dni) {

        return super.Get('/Loan/GetAllByDni/'+ dni);
    }

    AddLoanBook(idClient, idBook) {

        let param = {
            idLoan:0,
            idcliente: idClient,
            idBook: idBook
        }
        debugger;
        return super.Post('/Loan', param);
    }

    UpdateLoanBook(idLoan, idClient, idBook) {
        debugger;
        let param = {
            idLoan: idLoan,
            idcliente: idClient,
            idBook: idBook.toString()
        }
        return super.Put('/Loan', param);
    }

}
