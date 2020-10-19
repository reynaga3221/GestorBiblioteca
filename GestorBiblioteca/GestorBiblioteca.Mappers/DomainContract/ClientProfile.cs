using AutoMapper;
using GestorBiblioteca.ContractModels.Requests;
using GestorBiblioteca.ContractModels.Responses;
using GestorBiblioteca.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace GestorBiblioteca.Mappers.DomainContract
{
    public class ClienteProfile : Profile
    {
        public ClienteProfile()
        {
            CreateMap<Clientes, ClienteResponse>();
            CreateMap<ClienteRequets, Clientes>();
        }
    }
}
