using Pronunciapp.Data;

namespace Pronunciapp
{
    public class PracticeManager
    {
        private readonly AppData appData;
        private Dictionary<string, List<PhoneticWord>> wordList = new();
        private Dictionary<string, int> wordPractice = new();
        public PhoneticWord SelectedPhoneticWord { get; internal set; }
        public PhoneticSymbol SelectedPhoneticSymbol { get; internal set; }


        public PracticeManager(AppData appData)
        {
            this.appData = appData;
        }

        public void PracticePhoneticSymbol(string symbol)
        {
            SelectedPhoneticSymbol = appData.PhoneticSymbols.First(x => x.Symbol.Equals(symbol, StringComparison.OrdinalIgnoreCase));

            if (!wordList.ContainsKey(SelectedPhoneticSymbol.Symbol))
            {
                var words = this.appData.PhoneticWords.Where(w => w.Symbol == symbol).ToList();
                wordList[symbol] = words;
                wordPractice[symbol] = 0;
            }

            SetSelectedPhoneticWord();
        }

        public void PracticeNewWord()
        {
            var availableWordCount = wordList[SelectedPhoneticSymbol.Symbol].Count;
            if (wordPractice[SelectedPhoneticSymbol.Symbol] + 1 < availableWordCount)
            {
                wordPractice[SelectedPhoneticSymbol.Symbol]++;
            }
            else
            {
                wordPractice[SelectedPhoneticSymbol.Symbol] = 0;
            }

            SetSelectedPhoneticWord();
        }

        public void PracticePreviousWord()
        {
            if (wordPractice[SelectedPhoneticSymbol.Symbol] > 0)
            {
                wordPractice[SelectedPhoneticSymbol.Symbol]--;
            }

            SetSelectedPhoneticWord();
        }

        private void SetSelectedPhoneticWord() => SelectedPhoneticWord = wordList[SelectedPhoneticSymbol.Symbol][wordPractice[SelectedPhoneticSymbol.Symbol]];
    }
}
