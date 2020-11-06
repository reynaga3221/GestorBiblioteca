using GestorBiblioteca.Entities;
using GestorBiblioteca.Interfaces.Repositories;
using GestorBiblioteca.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
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
        public void Create(Book domain)
        {
            _repository.Save(domain);
        }

        public void Update(Book domain)
        {
            _repository.Update(domain);
        }
        public Book GetById(int idBook)
        {
            return _repository.GetAll().Where(x=>x.IdBook == idBook).FirstOrDefault();
        }
        public IEnumerable<Book> GetAll()
        {
            return _repository.GetAll();
        }

        public IEnumerable<Book> GetAllByTittle(string tittle)
        {
            return _repository.GetAll().Where(x=> x.Title.ToUpper().Contains(tittle.ToUpper()));
        }
        public void Delete(int id)
        {
            _repository.Delete(id);
        }
    }
}
