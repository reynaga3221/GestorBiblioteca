using System;
using System.Collections.Generic;
using System.Text;

namespace GestorBiblioteca.Entities
{
    public class User
    {
        public int IdUser { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
