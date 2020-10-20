using System;
using System.Collections.Generic;
using System.Text;

namespace GestorBiblioteca.ContractModels.Requests
{
    public class ClientRequets
    {
        public int Idclient { get; set; }
        public string DNI { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string telefono { get; set; }
        public string Mail { get; set; }
    }
}
