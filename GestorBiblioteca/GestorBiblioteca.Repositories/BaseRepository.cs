using GestorBiblioteca.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace GestorBiblioteca.Repositories
{
    public abstract class BaseRepository
    {

        IConnectionParameters _connectionParameters;

        public BaseRepository(IConnectionParameters connectionParameters)
        {
            this._connectionParameters = connectionParameters;
        }

        protected IDbConnection GetConnection()
        {
            return new SqlConnection(_connectionParameters.ConnectionString());
        }
    }
}

