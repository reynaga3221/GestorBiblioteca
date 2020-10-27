using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using GestorBiblioteca.ContractModels.Requests;
using GestorBiblioteca.ContractModels.Responses;
using GestorBiblioteca.Interfaces.Services;
using GestorBiblioteca.Interfaces.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using GestorBiblioteca.Entities;

namespace GestorBiblioteca.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly ILoanService _loanService;

        public LoanController(IMapper mapper, ILoanService loanService)
        {
            _loanService = loanService;
            _mapper = mapper;
        }

        [HttpGet]
        public IEnumerable<Loan> Get()
        {
            var response = _loanService.GetAll();

            return response;
        }
        [HttpGet("GetAllByDni")]
        public IEnumerable<LoanResponse> GetAllByDni(string dni)
        {

            
            var response = _mapper.Map<IEnumerable<LoanResponse>>(_loanService.GetAllByDni(Convert.ToInt32(dni)));

            return response;
        }

        [HttpPost]
        public IActionResult Post(LoanRequest loanRequest)
        {
            try
            {
                var domain = _mapper.Map<Loan>(loanRequest);
                _loanService.GenerateLoan(domain);
                return Created("/Loan/" + domain.IdLoan, loanRequest);
            }
            catch (Exception ex)
            {
                return Conflict(new { body = loanRequest, message = ex.Message });
            }
        }

        [HttpPut]
        public IActionResult Put(LoanRequest loanRequest)
        {

            var domainUser = _mapper.Map<Loan>(loanRequest);
            _loanService.ReturnBook(domainUser);

            return Ok(loanRequest);
        }

    }
}
