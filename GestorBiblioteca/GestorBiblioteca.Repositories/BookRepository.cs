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
    public class BookRepository : BaseRepository, IBookRepository
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
        public void Save(Book domain)
        {
            using (var connection = this.GetConnection())
            {
                var affectedRow = connection.Execute("INSERT INTO Books ( Title, Author, TotalQuantity, PublishedDate )VALUES (@Title, @Author, @TotalQuantity, @PublishedDate)", new { Title = domain.Title, Author = domain.Author, TotalQuantity = domain.TotalQuantity, PublishedDate = domain.PublishedDate });
            }
        }
       
        public void Update(Book domain)
        {
            using (var connection = this.GetConnection())
            {
                var affectedRows = connection.Execute("UPDATE Books SET Title = @Title, Author = @Author, TotalQuantity = @TotalQuantity, PublishedDate = @PublishedDate WHERE IdBook = @IdBook", new { Title = domain.Title, Author = domain.Author, TotalQuantity = domain.TotalQuantity, PublishedDate = domain.PublishedDate, IdBook =domain.IdBook });

            }
        }
        public void Delete(int id)
        {
            using (var connection = this.GetConnection())
            {
                var affectedRows = connection.Execute("UPDATE Books SET Title = @Title, Author = @Author, TotalQuantity = @TotalQuantity, PublishedDate = @PublishedDate WHERE IdBook = @IdBook");

            }
        }
    }
}
