using GestorBiblioteca.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace GestorBiblioteca.Interfaces.Services
{
    public interface IBookService
    {
        void Update(Book domain);
        void Create(Book domain);
        void Delete(int id);
        Book GetById(int id);
        IEnumerable<Book> GetAll();
    }
}
