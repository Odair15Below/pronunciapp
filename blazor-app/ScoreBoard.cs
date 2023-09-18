using Pronunciapp.Data;
using SQLite;

namespace Pronunciapp
{
    public class ScoreBoard
    {
        private readonly PronunciappLocalDatabase localDatabase;

        public ScoreBoard(PronunciappLocalDatabase localDatabase)
        {
            this.localDatabase = localDatabase;
        }

        public async Task AddPractice(PhoneticSymbol phoneticSymbol, PhoneticWord phoneticWord) 
        {
            var key = $"{phoneticSymbol.Symbol}-{phoneticWord.Word}";
            var item = await localDatabase.GetItemAsync(key);
            item.Total++;
            await localDatabase.UpdateItemAsync(item);
        }

        public async Task<int> GetWordPracticeTotal(PhoneticSymbol phoneticSymbol, PhoneticWord phoneticWord) 
        {
            var key = $"{phoneticSymbol.Symbol}-{phoneticWord.Word}";

            var item = await localDatabase.GetItemAsync(key);
            if (item is null)
            {
                await localDatabase.AddItemAsync(new WordPractice { Key = key, Total = 0 });
                return 0;
            }

            return item.Total;
        }
    }

    public class WordPractice
    {
        [PrimaryKey]
        public string Key { get; set; }
        public int Total { get; set; }
    }
}
