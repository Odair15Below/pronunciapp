using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pronunciapp.Data
{
    public record AppData
    {
        public List<Category> Categories { get; set; }
        public List<PhoneticSymbol> PhoneticSymbols { get; set; } = new();
        public List<PhoneticWord> PhoneticWords { get; set; } = new();
    }

    public record Category
    {
        public string Name { get; set; }
    }

    public record PhoneticSymbol
    {
        public string Symbol { get; set; }
        public List<string> Samples { get; set; } = new();
        public string Category { get; set; }
        public string YoutubeVideoId { get; set; }
    }

    public record PhoneticWord
    {
        public string Word { get; set; }
        public string Symbol { get; set; }
    }
}
