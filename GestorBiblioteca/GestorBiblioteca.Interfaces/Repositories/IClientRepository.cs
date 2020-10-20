using System;
using System.Collections.Generic;
using System.Text;
using GestorBiblioteca.Entities;

namespace GestorBiblioteca.Interfaces.Repositories
{
    public interface IClientRepository
    {
        void Update(Clients domain);
        void Save(Clients domain);
        void Delete(int id);
        IEnumerable<Clients> GetAll();
    }
}
