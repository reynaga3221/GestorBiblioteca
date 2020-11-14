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
            try
            {
                var book = _bookService.GetById(domain.IdBook);
                
                book.TotalQuantity = Convert.ToString(Convert.ToInt32(book.TotalQuantity) - 1);

                domain.LoanDate = DateTime.Now;


                //si tiene un libro adeudado y es mayor a 14 dias, no se puede realizar el prestamos(esto aplica una sancion de 2 semanas)
                var isDeptor = this.GetAll().Any(l => l.Client.Idcliente == domain.idcliente && l.ReturnDate == null && (DateTime.Now - l.LoanDate).Value.Days >= 14);
                
                if (isDeptor)
                {
                    throw new ArgumentException("El cliente ya posee un libro adeudado con 14 dias.", "Error de logica");
                }

                //si tiene un libro adeudado, no se puede realizar el prestamos.(no aplica sancion)
                var tieneLibroPrestado = this.GetAll().Any(l => l.Client.Idcliente == domain.idcliente && l.ReturnDate == null);

                if (tieneLibroPrestado)
                {
                    throw new ArgumentException("El cliente ya posee un libro adeudado.", "Error de logica");
                }

                _repository.Save(domain);
                _bookService.Update(book);
            }
            catch (Exception)
            {

                throw;
            }
            
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
