﻿using System;
using System.Collections.Generic;
using System.Text;

namespace GestorBiblioteca.ContractModels.Responses
{
    public class BookResponse
    {
        public int IdBook { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string TotalQuantity { get; set; }
        public string PublishedDate { get; set; }
    }
}
