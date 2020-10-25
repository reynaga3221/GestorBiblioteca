using System;
using System.Collections.Generic;
using System.Text;

namespace GestorBiblioteca.Entities
{
    public class Loan
    {
        public int IdLoan { get; set; }
        public DateTime? LoanDate { get; set; }
        public DateTime? ReturnDate { get; set; }
        public int IdBook { get; set; }
        public int idcliente { get; set; }
        public Book Book { get; set; }
        public Clients Client { get; set; }

    }
}
