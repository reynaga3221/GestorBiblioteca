using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
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
    }
}