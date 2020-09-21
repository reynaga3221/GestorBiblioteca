using GestorBiblioteca.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GestorBiblioteca.Interfaces.Services
{
    public interface IUserService
    {
        IEnumerable<User> GetAll();
    }
}
