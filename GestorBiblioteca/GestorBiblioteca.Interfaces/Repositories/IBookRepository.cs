using GestorBiblioteca.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace GestorBiblioteca.Interfaces.Repositories
{
    public interface IBookRepository
    {
        IEnumerable<Book> GetAll();
    }
}
