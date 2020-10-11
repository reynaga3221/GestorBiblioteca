using GestorBiblioteca.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace GestorBiblioteca.Interfaces.Repositories
{
    public interface IBookRepository
    {
        void Update(Book domain);
        void Save(Book domain);
        void Delete(int id);
        IEnumerable<Book> GetAll();
    }
}
    