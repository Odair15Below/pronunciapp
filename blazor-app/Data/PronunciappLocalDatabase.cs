using SQLite;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pronunciapp.Data
{
    public class PronunciappLocalDatabase
    {
        SQLiteAsyncConnection Database;

        public PronunciappLocalDatabase()
        {
        }

        async Task Init()
        {
            if (Database is not null)
                return;

            Database = new SQLiteAsyncConnection(Constants.DatabasePath, Constants.Flags);
            var result = await Database.CreateTableAsync<WordPractice>();
        }

        public async Task<List<WordPractice>> GetItemsAsync()
        {
            await Init();
            return await Database.Table<WordPractice>().ToListAsync();
        }

        public async Task<WordPractice> GetItemAsync(string key)
        {
            await Init();
            return await Database.Table<WordPractice>().Where(i => i.Key == key).FirstOrDefaultAsync();
        }

        public async Task<int> AddItemAsync(WordPractice item)
        {
            await Init();
            return await Database.InsertAsync(item);
        }

        public async Task<int> UpdateItemAsync(WordPractice item)
        {
            await Init();
            return await Database.UpdateAsync(item);
        }

        public async Task<int> DeleteItemAsync(WordPractice item)
        {
            await Init();
            return await Database.DeleteAsync(item);
        }
    }
}
