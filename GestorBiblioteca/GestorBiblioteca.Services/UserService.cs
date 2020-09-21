using GestorBiblioteca.Entities;
using GestorBiblioteca.Interfaces.Repositories;
using GestorBiblioteca.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GestorBiblioteca.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repository;

        public UserService(IUserRepository userRepository)
        {
            _repository = userRepository;
        }

        public IEnumerable<User> GetAll()
        {
            return _repository.GetAll();
        }

    }
}
