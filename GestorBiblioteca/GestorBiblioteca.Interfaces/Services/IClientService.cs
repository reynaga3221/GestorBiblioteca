using System;
using System.Collections.Generic;
using System.Text;
using GestorBiblioteca.Entities;

namespace GestorBiblioteca.Interfaces.Services
{
    public interface IClienteService
    {
        void Update(Clientes domain);
        void Create(Clientes domain);
        void Delete(int id);
        Clientes GetById(int id);
        IEnumerable<Clientes> GetAll();
    }
}
