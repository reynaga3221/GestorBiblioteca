using System;
using System.Collections.Generic;
using System.Text;

namespace GestorBiblioteca.ContractModels.Responses
{
    public class ClientResponse
    {
        public int Idclient { get; set; }
        public int DNI { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int telefono { get; set; }
        public string Mail { get; set; }
    }
}
