using GestorBiblioteca.Entities;
using GestorBiblioteca.Interfaces.Repositories;
using GestorBiblioteca.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace GestorBiblioteca.Services
{
    public class BookService : IBookService
    {
        private readonly IBookRepository _repository;
        public BookService(IBookRepository bookRepository)
        {
            _repository = bookRepository;
        }
        public IEnumerable<Book> GetAll()
        {
            return _repository.GetAll();
        }
    }
}
