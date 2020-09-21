using Dapper;
using GestorBiblioteca.Interfaces;
using GestorBiblioteca.Interfaces.Repositories;
using GestorBiblioteca.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GestorBiblioteca.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository 
    {
        public UserRepository(IConnectionParameters connectionParameters) : base(connectionParameters)
        {

        }

        public IEnumerable<User> GetAll()
        {
            using (var connection = this.GetConnection())
            {
                var users = connection.Query<User>(@"
                        SELECT * FROM Users "
                        );

                return users.AsQueryable();
            }
        }
    }
}
