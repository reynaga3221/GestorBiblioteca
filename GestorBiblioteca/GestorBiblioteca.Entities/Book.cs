using System;
using System.Collections.Generic;
using System.Text;

namespace GestorBiblioteca.Entities
{
    public class Book
    {
        public int IdBook { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string TotalQuantity {get; set; }
        public DateTime PublishedDate { get; set; }
    }
}
