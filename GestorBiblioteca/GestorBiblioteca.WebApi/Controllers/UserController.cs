using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using GestorBiblioteca.ContractModels.Requests;
using GestorBiblioteca.Entities;
using GestorBiblioteca.Interfaces.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GestorBiblioteca.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IUserService _userService;

        public UserController(IMapper mapper, IUserService userService)
        {
            _mapper = mapper;
            _userService = userService;
        }

        // GET: api/User
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // POST: api/User
        [HttpPost("Login")]
        public bool Login([FromBody] UserRequets userRequets)
        {
            var domain = _mapper.Map<User>(userRequets);

            var result = _userService.Login(domain);

            return result;
        }
    }
}
