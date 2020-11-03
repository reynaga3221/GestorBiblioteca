using GestorBiblioteca.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace GestorBiblioteca.Interfaces.Services
{
    public interface ILoanService
    {
        IEnumerable<Loan> GetAll();

        IEnumerable<Loan> GetAllByDni(int dni);

        void GenerateLoan(Loan domain);
        void ReturnBook(Loan domain);
        IEnumerable<Loan> GetAllDetors();
        IEnumerable<Loan> GetAllDetorsByDni(int dni);
    }
}
