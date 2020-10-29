using System;
using System.Collections.Generic;
using System.Text;

namespace GestorBiblioteca.ContractModels.Requests
{
    public class LoanRequest
    {
        public int IdLoan { get; set; }
        public string IdBook { get; set; }
        public int  idcliente { get; set; }       
    }
}
