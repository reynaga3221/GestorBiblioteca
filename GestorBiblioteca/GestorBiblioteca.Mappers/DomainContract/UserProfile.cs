using AutoMapper;
using GestorBiblioteca.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using GestorBiblioteca.ContractModels.Requests;

namespace GestorBiblioteca.Mappers.DomainContract
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<UserRequets, User>().ForMember(dest => dest.UserName, opt =>
                opt.MapFrom(src => src.User)).ForMember(dest => dest.Password, opt =>
                opt.MapFrom(src => src.Password));
        }
    }
}
