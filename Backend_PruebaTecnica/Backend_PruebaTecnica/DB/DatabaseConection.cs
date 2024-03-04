using Backend_PruebaTecnica.Models;
using System.Data.SQLite;
using System.Data;
using System.Text.Json;
using Dapper;
using System;
using Backend_PruebaTecnica.Utils;

namespace Backend_PruebaTecnica.DB
{
    public class DatabaseConection
    {

        private readonly string dataBank = "https://random-data-api.com/api/v2/banks?size=100";

        private async void InitialConnDB( SQLiteConnection connect)
        {
            JsonSerializerOptions options = new() { PropertyNameCaseInsensitive = true };
            using var httpClient = new HttpClient();
            using IDbConnection conn = new SQLiteConnection(connect.ConnectionString);
            string sql = "select * from Bank";
            var banks = conn.Query<Bank>(sql);

            if (!banks.Any())
            {
                foreach (int value in Enumerable.Range(1, 2))
                {
                    var response = await httpClient.GetAsync(dataBank);
                    if (response.IsSuccessStatusCode)
                    {
                        var content = await response.Content.ReadAsStringAsync();
                        var Banks = JsonSerializer.Deserialize<List<Bank>>(content, options);
                        foreach (var bank in Banks)
                        {
                            string insertsql = @"insert into Bank (uid, account_number, iban, bank_name, routing_number, swift_bic, created_at) values (@uid, @accNumber, @iban, @bankName, @routingNumber, @swiftBic, @createdAt)";

                            conn.ExecuteScalar<Bank>(insertsql, new
                            {
                                uid = bank.Uid,
                                accNumber = bank.Account_Number,
                                iban = bank.Iban,
                                bankName = bank.Bank_Name,
                                routingNumber = bank.Routing_Number,
                                swiftBic = bank.Swift_Bic,
                                createdAt = DateTime.Now.ToString()
                            });

                        }
                    }
                }

            }
        }

        private void InitializeAdmin(SQLiteConnection connect)
        {
            using IDbConnection conn = new SQLiteConnection(connect.ConnectionString);
            string sql = "select * from User WHERE Mail = @AdminMail";
            var admin = conn.Query<User>(sql,new {AdminMail = "admin@admin.com" });
            if (!admin.Any())
            {
                Hash hash = new();
                string hashed = hash.GetHashSha256("Admin1234");
                string AdminSQL = @"INSERT INTO User(Name, Mail, Passwrd, Admin) VALUES (@Name, @Mail, @Passwrd, 1)";
                conn.ExecuteScalar<User>(AdminSQL, new
                {
                    Name = "Admin",
                    Mail = "admin@admin.com",
                    Passwrd = hashed
                });
            }

        }

        public SQLiteConnection GetConnection(string queryString)
        {
            SQLiteConnection connection = new SQLiteConnection(queryString);
            InitialConnDB(connection);
            InitializeAdmin(connection);

            return connection;

        }

    }
}
