using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using GestorBiblioteca.ContractModels.Requests;
using GestorBiblioteca.ContractModels.Responses;
using GestorBiblioteca.Entities;
using GestorBiblioteca.Interfaces.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GestorBiblioteca.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IClienteService _clienteService;
        public ClienteController(IMapper mapper, IClienteService clienteService)
        {
            _clienteService = clienteService;
            _mapper = mapper;
        }

        // GET: api/User
        [HttpGet]
        public IEnumerable<ClientResponse> Get()
        {
            var response = _mapper.Map<IEnumerable<ClientResponse>>(_clienteService.GetAll());
            return response;
        }
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {

            var response = _mapper.Map<ClientResponse>(_clienteService.GetById(Convert.ToInt32(id)));

            return Ok(response);
        }
        [HttpPut]
        public IActionResult Put(ClientRequets clienteRequets)
        {

            var domainUser = _mapper.Map<Clientes>(clienteRequets);
            _clienteService.Update(domainUser);

            return Ok(clienteRequets);
        }
        [HttpPost]
        public IActionResult Post(ClientRequets clienteRequets)
        {
            try
            {
                var domain = _mapper.Map<Clientes>(clienteRequets);
                _clienteService.Create(domain);
                return Created("/Cliente/" + domain.Idcliente, clienteRequets);

            }
            catch (Exception ex)
            {
                return Conflict(new { body = clienteRequets, message = ex.Message });
            }
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            try
            {
                _clienteService.Delete(Convert.ToInt32(id));
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
