using GestorBiblioteca.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GestorBiblioteca.Interfaces.Repositories
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAll();
    }
}
