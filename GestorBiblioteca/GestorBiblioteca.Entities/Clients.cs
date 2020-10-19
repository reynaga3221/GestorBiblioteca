using System;
using System.Collections.Generic;
using System.Text;

namespace GestorBiblioteca.Entities
{
    public class Clientes
    {
        public int Idcliente { get; set; } 
		public int DNI  { get; set; }
	    public string Nombre  { get; set; }
        public string Apellido { get; set; }
        public int telefono { get; set; }
        public string Mail { get; set; }
    }
}
