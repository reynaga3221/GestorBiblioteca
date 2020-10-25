using System;
using System.Collections.Generic;
using GestorBiblioteca.Entities;
using System.Text;

namespace GestorBiblioteca.Interfaces.Repositories
{
    public interface ILoanRepository
    {
        ////void Update(Loan domain);

        ////void Delete(int id);
        IEnumerable<Loan> GetAll();
        void Save(Loan domain);

        void Update(Loan domain);
    }
}
