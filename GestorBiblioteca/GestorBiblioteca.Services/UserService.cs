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

        public bool Login(User user)
        {
            var users = _repository.GetAll();
            return users.Any(u => u.Password == user.Password && u.UserName == user.UserName);
        }
        public IEnumerable<User> GetAll()
        {
            return _repository.GetAll();
        }

    }
}
