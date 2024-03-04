using Backend_PruebaTecnica.Models;
using System.Data;
using Dapper;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Drawing;


namespace Backend_PruebaTecnica.DB.BankConnection
{
    public class BankConnection : IBankConnectionInterface
    {
        private readonly IConfiguration _config;
        private readonly string _connectionString;
        public BankConnection(IConfiguration config)
        {
            _config = config;
            _connectionString = _config.GetConnectionString("default");
        }

        public async Task<BankResponse> getBankAsync(int page, int size)
        {
            var db = new DatabaseConection();
            using IDbConnection connection = db.GetConnection(_connectionString);
            int offset = (page - 1) * size;

            string sql = "select * from Bank where deleted_At IS NULL LIMIT @size OFFSET @offset";
            var banks = await connection.QueryAsync<Bank>(sql, new { size, offset });

            string sqlTotal = "select count(*) from Bank where deleted_At IS NULL";
            int total = await connection.ExecuteScalarAsync<int>(sqlTotal);
            BankResponse bank = new ();
            bank.Data = banks;
            bank.Total = total;
            bank.Page = page;
            bank.Size = size;

            return bank;
            
        }
        public async Task<BankResponse> getBankByUIDAsync(string uid)
        {
            var db = new DatabaseConection();
            var connection = db.GetConnection(_connectionString);
            string sql = "select * from Bank where uid=@uid AND deleted_At IS NULL";
            var banks = await connection.QueryAsync<Bank>(sql, new { uid });

            string sqlTotal = "select count(*) from Bank where uid=@uid AND deleted_At IS NULL";
            int total = await connection.ExecuteScalarAsync<int>(sqlTotal, new{uid });

            BankResponse bank = new();
            bank.Data = banks;
            bank.Total = total;
            bank.Page = 1;
            bank.Size = 10;

            return bank;
        }

        public async Task<Bank> AddBankAsync(Bank bank) {
            var db = new DatabaseConection();
            var connection = db.GetConnection(_connectionString);

            string sql = @"insert into Bank(uid,account_number, iban, bank_name, routing_number, swift_bic, created_at) values(@uid, @accNumber, @iban, @bankName, @routingNumber, @swiftBic, @createdAt);
                           SELECT last_insert_rowid()";
            int createdId = await connection.ExecuteScalarAsync<int>(sql, new {
                uid = bank.Uid,
                accNumber = bank.Account_Number,
                iban = bank.Iban,
                bankName = bank.Bank_Name,
                routingNumber = bank.Routing_Number,
                swiftBic = bank.Swift_Bic,
                createdAt = DateTime.Now.ToString()
            });

            bank.Id = createdId;

            return bank;

        }

        public async Task EditBankName(Bank bank) {
            var db = new DatabaseConection();
            var connection = db.GetConnection(_connectionString);

            string sql = @"update Bank set bank_name=@BankName,updated_at=@UpdatedAt where uid=@Uid";
            await connection.ExecuteAsync(sql, new { BankName = bank.Bank_Name, UpdatedAt = DateTime.Now.ToString(), Uid = bank.Uid});
        }
        public async Task DeleteBank(string uid)
        {
            var db = new DatabaseConection();
            var connection = db.GetConnection(_connectionString);

            string sql = @"update Bank set deleted_at=@deletedAt where uid=@Uid";
            await connection.ExecuteAsync(sql, new {deletedAt = DateTime.Now.ToString(), Uid = uid });
        }
    }
}
