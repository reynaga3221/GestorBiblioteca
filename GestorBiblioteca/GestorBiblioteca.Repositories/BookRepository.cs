using Dapper;
using GestorBiblioteca.Entities;
using GestorBiblioteca.Interfaces;
using GestorBiblioteca.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GestorBiblioteca.Repositories
{
    public class BookRepository: BaseRepository,IBookRepository
    {
        public BookRepository(IConnectionParameters connectionParameters) : base(connectionParameters)
        {

        }
        public IEnumerable<Book> GetAll()
        {
            using (var connection = this.GetConnection())
            {
                var books = connection.Query<Book>(@"
                        SELECT * FROM Books "
                        );

                return books.AsQueryable();
            }
        }
    }
}
