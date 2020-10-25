using AutoMapper;
using GestorBiblioteca.ContractModels.Requests;
using GestorBiblioteca.ContractModels.Responses;
using GestorBiblioteca.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace GestorBiblioteca.Mappers.DomainContract
{
    public class LoanProfile : Profile
    {
        public LoanProfile()
        {
            CreateMap<Loan, LoanResponse>().ForMember(dest => dest.LoanDate,
                opt => opt.MapFrom(src => src.LoanDate != null ? src.LoanDate.Value.ToString("yyyy/MM/dd") : "")).ForMember(dest => dest.ReturnDate,
                opt => opt.MapFrom(src => src.ReturnDate != null ? src.ReturnDate.Value.ToString("yyyy/MM/dd") : ""));

            CreateMap<LoanRequest, Loan>();


        }
    }
}
