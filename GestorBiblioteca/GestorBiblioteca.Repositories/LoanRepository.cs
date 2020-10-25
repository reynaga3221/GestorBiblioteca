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
    public class LoanRepository : BaseRepository, ILoanRepository
    {
        public LoanRepository(IConnectionParameters connectionParameters) : base(connectionParameters)
        {

        }
        public IEnumerable<Loan> GetAll()
        {
            using (var connection = this.GetConnection())
            {
                var loans = connection.Query<Loan,Book,Clients,Loan>(@"
                        select * from Loans l 
                        inner join Books b on b.IdBook = l.IdBook
                        inner join clientes c on l.idcliente = c.Idcliente
                        "
                      , (loans, book,client) =>
                        {
                            loans.Book = book;
                            loans.Client = client;

                            return loans;
                        }, splitOn: "IdBook,Idcliente");

                return loans;
            }
        }

        public void Save(Loan domain)
        {
            using (var connection = this.GetConnection())
            {
                var affectedRow = connection.Execute("INSERT INTO Loans ( LoanDate, ReturnDate, IdBook, idcliente )VALUES (@LoanDate, @ReturnDate, @IdBook, @idcliente)", new { LoanDate = domain.LoanDate, ReturnDate = domain.ReturnDate, IdBook = domain.IdBook, idcliente = domain.idcliente });
            }
        }

        public void Update(Loan domain)
        {
            using (var connection = this.GetConnection())
            {
                var affectedRows = connection.Execute("UPDATE Loans SET ReturnDate = @ReturnDate WHERE IdLoan = @IdLoan", new { ReturnDate = domain.ReturnDate, IdLoan = domain.IdLoan });

            }
        }

        //public IQueryable<ContractDto> GetAll()
        //{
        //    using (var connection = this.GetConnection())
        //    {
        //        var contract = connection.Query<ContractDto, StateDto, CountryDto, CurrencyDto, ContractDto>(@"
        //                SELECT * FROM Contract c 
        //                LEFT JOIN State s ON s.id = c.state_id
        //                LEFT JOIN Country co ON co.id = c.country_id
        //                LEFT JOIN Currency cu ON cu.id = c.currency
        //                "
        //                , (contract, state, country, currency) =>
        //                {
        //                    contract.State = state;
        //                    contract.Country = country;
        //                    contract.CurrencyResponse = currency;
        //                    return contract;
        //                });

        //        return contract.AsQueryable();
        //    }
        //}
    }
}
