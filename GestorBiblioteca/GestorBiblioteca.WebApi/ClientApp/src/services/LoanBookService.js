import BaseService from './BaseService';

export default class LoanBookService extends BaseService {

    GetAllByDni(dni) {
        debugger;
        return super.Get('/Loan/GetAllByDni/'+ dni);
    }

    AddLoanBook(loan) {
        debugger;
        return super.Post('/Loan', loan);
    }

    UpdateLoanBook(loan) {
        return super.Put('/Loan', loan
        );
    }

}
