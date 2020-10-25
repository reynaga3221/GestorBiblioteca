using System;
using System.Collections.Generic;
using System.Text;

namespace GestorBiblioteca.ContractModels.Responses
{
    public class LoanResponse
    {
        public int IdLoan { get; set; }
        public string LoanDate { get; set; }
        public string ReturnDate { get; set; }
        public BookResponse Book { get; set; }
        public ClientResponse Client { get; set; }
    }
}
