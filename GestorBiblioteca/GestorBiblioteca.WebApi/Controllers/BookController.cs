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
    public class BookController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IBookService _bookService;
        public BookController(IMapper mapper, IBookService bookService)
        {
            _bookService = bookService;
            _mapper = mapper;
        }
        // GET: api/User
        [HttpGet]
        public IEnumerable<BookResponse> Get()
        {
            var response = _mapper.Map<IEnumerable<BookResponse>>(_bookService.GetAll());
            return response;
        }

        [HttpGet("{id}")]    
        public IActionResult Get(string id)
        {

            var response = _mapper.Map<BookResponse>(_bookService.GetById(Convert.ToInt32(id)));

            return Ok(response);
        }

        [HttpGet("GetByTitle/{title}")]
        public IActionResult GetByTitle(string title)
        {

            var response = _mapper.Map<IEnumerable<BookResponse>>(_bookService.GetAllByTittle(title));

            return Ok(response);
        }

        [HttpPut]     
        public IActionResult Put(BookRequets bookRequets)
        {

            var domainUser = _mapper.Map<Book>(bookRequets);
            _bookService.Update(domainUser);

            return Ok(bookRequets);

        }

        [HttpPost]        
        public IActionResult Post(BookRequets bookRequets)
        {
            try
            {
                var domain = _mapper.Map<Book>(bookRequets);
                _bookService.Create(domain);
                return Created("/Book/" + domain.IdBook, bookRequets);

            }
            catch (Exception ex) 
            {
                return Conflict(new { body = bookRequets, message = ex.Message });
            }

        }
        [HttpDelete("{id}")]        
        public IActionResult Delete(string id)
        {
            try
            {
                _bookService.Delete(Convert.ToInt32(id));
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
                
            }                      
        }
    }
}