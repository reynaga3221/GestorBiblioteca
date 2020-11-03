using GestorBiblioteca.Entities;
using GestorBiblioteca.Interfaces.Repositories;
using GestorBiblioteca.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GestorBiblioteca.Services
{
    public class LoanService : ILoanService
    {
        private readonly ILoanRepository _repository;
        private readonly IBookService _bookService;
        public LoanService(ILoanRepository loanRepository, IBookService bookService)
        {
            _repository = loanRepository;
            _bookService = bookService;
        }
        public IEnumerable<Loan> GetAll()
        {
            return _repository.GetAll();
        }

        public IEnumerable<Loan> GetAllByDni(int dni)
        {
            var loans = this.GetAll();
            
            var loansClient = loans.Where(l => l.Client.DNI == dni).OrderByDescending(l => l.LoanDate);

            return loansClient;
        }


        public void GenerateLoan(Loan domain)
        {
            var book = _bookService.GetById(domain.IdBook);
            
            book.TotalQuantity = Convert.ToString(Convert.ToInt32(book.TotalQuantity) - 1);

            domain.LoanDate = DateTime.Now;
            

            _repository.Save(domain);      
            _bookService.Update(book);
        }

        public void ReturnBook(Loan domain)
        {
            var book = _bookService.GetById(domain.IdBook);
            book.TotalQuantity = Convert.ToString(Convert.ToInt32(book.TotalQuantity) + 1);

            domain.ReturnDate = DateTime.Now;

            _repository.Update(domain);
            _bookService.Update(book);
        }

        public IEnumerable<Loan> GetAllDetorsByDni(int dni)
        {
            var loans = this.GetAll();

            var DeptorsClient = loans.Where(l => l.Client.DNI == dni && l.ReturnDate == null && (DateTime.Now - l.LoanDate).Value.Days >= 14);

            return DeptorsClient;
        }
        public IEnumerable<Loan> GetAllDetors()
        {
            var loans = this.GetAll();

            var DeptorsClient = loans.Where(l => l.ReturnDate == null && (DateTime.Now - l.LoanDate).Value.Days >= 14).OrderBy(l => l.LoanDate);

            return DeptorsClient;
        }

    }
}
