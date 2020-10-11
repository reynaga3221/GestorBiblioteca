using GestorBiblioteca.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace GestorBiblioteca.Interfaces.Services
{
    public interface IBookService
    {
        IEnumerable<Book> GetAll();
    }
}
