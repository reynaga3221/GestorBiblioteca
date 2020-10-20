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
    public class ClientController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IClientService _ClientService;
        public ClientController(IMapper mapper, IClientService ClientService)
        {
            _ClientService = ClientService;
            _mapper = mapper;
        }

        // GET: api/User
        [HttpGet]
        public IEnumerable<ClientResponse> Get()
        {
            var response = _mapper.Map<IEnumerable<ClientResponse>>(_ClientService.GetAll());
            return response;
        }
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {

            var response = _mapper.Map<ClientResponse>(_ClientService.GetById(Convert.ToInt32(id)));

            return Ok(response);
        }
        [HttpPut]
        public IActionResult Put(ClientRequets ClientRequets)
        {

            var domainUser = _mapper.Map<Clients>(ClientRequets);
            _ClientService.Update(domainUser);

            return Ok(ClientRequets);
        }
        [HttpPost]
        public IActionResult Post(ClientRequets ClientRequets)
        {
            try
            {
                var domain = _mapper.Map<Clients>(ClientRequets);
                _ClientService.Create(domain);
                return Created("/Client/" + domain.Idclient, ClientRequets);

            }
            catch (Exception ex)
            {
                return Conflict(new { body = ClientRequets, message = ex.Message });
            }
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            try
            {
                _ClientService.Delete(Convert.ToInt32(id));
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
