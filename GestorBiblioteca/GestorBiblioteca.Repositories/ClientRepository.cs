using System;
using System.Collections.Generic;
using System.Text;
using Dapper;
using GestorBiblioteca.Entities;
using GestorBiblioteca.Interfaces;
using GestorBiblioteca.Interfaces.Repositories;
using System.Linq;

namespace GestorBiblioteca.Repositories
{
    public class ClientRepository : BaseRepository, IClientRepository
    {
        public ClientRepository(IConnectionParameters connectionParameters) : base(connectionParameters)
        {
         }
        public IEnumerable<Clients> GetAll()
        {
            using (var connection = this.GetConnection())
            {
                var clients = connection.Query<Clients>(@"SELECT * FROM clientes ");

                return clients.AsQueryable();
            }
        }
        public void Save(Clients domain)
        {
            using (var connection = this.GetConnection())
            {
                var affectedRow = connection.Execute("INSERT INTO clientes ( DNI, Nombre, Apellido, telefono, Mail )VALUES (@DNI, @Nombre, @Apellido, @telefono, @Mail)", new { DNI = domain.DNI, Nombre = domain.Nombre, Apellido = domain.Apellido, Telefono = domain.Telefono, Mail =  domain.Mail });
            }
        }

        public void Update(Clients domain)
        {
            using (var connection = this.GetConnection())
            {
                var affectedRows = connection.Execute("UPDATE clientes SET DNI = @DNI, Nombre = @Nombre, Apellido = @Apellido, telefono = @telefono, Mail = @Mail WHERE Idcliente = @Idcliente", new { DNI = domain.DNI, Nombre = domain.Nombre, Apellido = domain.Apellido, Telefono = domain.Telefono, Mail = domain.Mail, Idcliente = domain.Idcliente });

            }
        }
        public void Delete(int id)
        {
            using (var connection = this.GetConnection())
            {
                var affectedRows = connection.Execute("DELETE FROM  clientes  WHERE Idcliente = @Idcliente", new { Idcliente = id });
            }
          
        }
    }
}
