using System;
using System.Collections.Generic;
using System.Text;
using GestorBiblioteca.Entities;
using GestorBiblioteca.Interfaces.Repositories;
using GestorBiblioteca.Interfaces.Services;
using System.Linq;

namespace GestorBiblioteca.Services
{
    public class ClientService : IClientService
    {
        private readonly IClientRepository _repository;
        public ClientService(IClientRepository clienteRepository)
        {
            _repository = clienteRepository;
        }
        public void Create(Clients domain)
        {
            _repository.Save(domain);
        }

        public void Update(Clients domain)
        {
            _repository.Update(domain);
        }
        public Clients GetById(int idcliente)
        {
            return _repository.GetAll().Where(x => x.Idcliente == idcliente).FirstOrDefault();
        }
        public Clients GetByDni(int dni)
        {
            return _repository.GetAll().Where(x => x.DNI == dni).FirstOrDefault();
        }
        public IEnumerable<Clients> GetAll()
        {
            return _repository.GetAll();
        }
        public void Delete(int id)
        {
            _repository.Delete(id);
        }
    }
}
