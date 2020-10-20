using System;
using System.Collections.Generic;
using System.Text;
using GestorBiblioteca.Entities;

namespace GestorBiblioteca.Interfaces.Services
{
    public interface IClientService
    {
        void Update(Clients domain);
        void Create(Clients domain);
        void Delete(int id);
        Clients GetById(int id);
        IEnumerable<Clients> GetAll();
    }
}
