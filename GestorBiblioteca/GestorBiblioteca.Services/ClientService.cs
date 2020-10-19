using System;
using System.Collections.Generic;
using System.Text;
using GestorBiblioteca.Entities;
using GestorBiblioteca.Interfaces.Repositories;
using GestorBiblioteca.Interfaces.Services;
using System.Linq;

namespace GestorBiblioteca.Services
{
    public class ClientService : IClienteService
    {
        private readonly IClienteRepository _repository;
        public ClientService(IClienteRepository clienteRepository)
        {
            _repository = clienteRepository;
        }
        public void Create(Clientes domain)
        {
            _repository.Save(domain);
        }

        public void Update(Clientes domain)
        {
            _repository.Update(domain);
        }
        public Clientes GetById(int idcliente)
        {
            return _repository.GetAll().Where(x => x.Idcliente == idcliente).FirstOrDefault();
        }
        public IEnumerable<Clientes> GetAll()
        {
            return _repository.GetAll();
        }
        public void Delete(int id)
        {
            _repository.Delete(id);
        }
    }
}
