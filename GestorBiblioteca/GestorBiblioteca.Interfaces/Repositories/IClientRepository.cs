using System;
using System.Collections.Generic;
using System.Text;
using GestorBiblioteca.Entities;

namespace GestorBiblioteca.Interfaces.Repositories
{
    public interface IClienteRepository
    {
        void Update(Clientes domain);
        void Save(Clientes domain);
        void Delete(int id);
        IEnumerable<Clientes> GetAll();
    }
}
