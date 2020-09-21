using GestorBiblioteca.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestorBiblioteca.WebApi.Setup
{
    public class DbInstaller : IConnectionParameters
    {

        IConfiguration _configuration;

        public DbInstaller(IConfiguration configuration)
        {
            this._configuration = configuration;
        }

        public string ConnectionString()
        {
            return this._configuration.GetSection("ConnectionStrings").GetSection("DefaultConnection").Value;
        }
    }
}
