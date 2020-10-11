using AutoMapper;
using GestorBiblioteca.ContractModels.Requests;
using GestorBiblioteca.ContractModels.Responses;
using GestorBiblioteca.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace GestorBiblioteca.Mappers.DomainContract
{
    public class BookProfile : Profile
    {
        public BookProfile()
        {
            CreateMap<Book, BookResponse>().ForMember(dest => dest.PublishedDate,
                opt => opt.MapFrom(src => src.PublishedDate != null ? src.PublishedDate.ToString("yyyy/MM/dd") : ""));
            CreateMap<BookRequets, Book>().ForMember(dest => dest.PublishedDate,
                opt => opt.MapFrom(src => Convert.ToDateTime(src.PublishedDate)));

        }
    }
}
