using Backend_PruebaTecnica.Models;
using Backend_PruebaTecnica.Utils;
using System.Data;
using Dapper;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System;
using System.ComponentModel;
using System.Diagnostics;

namespace Backend_PruebaTecnica.DB.UserConnection
{
    public class UserConnection : IUserConnectionInterface
    {
        private readonly IConfiguration _config;
        private readonly string _connectionString;
        public UserConnection(IConfiguration config)
        {
            _config = config;
            _connectionString = _config.GetConnectionString("default");
        }
        public async Task<IEnumerable<User>> LoginAsync(User user)
        {
            Hash hash = new();
            string hashed = hash.GetHashSha256(user.Passwrd);
            var db = new DatabaseConection();
            using IDbConnection connection = db.GetConnection(_connectionString);

            string sql = "select Id, Name, Mail, Admin from User where Mail = @email AND Passwrd = @passwrd";
            var login = await connection.QueryAsync<User>(sql, new {email = user.Mail, passwrd = hashed });

            return login;
        }

        public async Task<int> ValidateMail(string mail)
        {
            var db = new DatabaseConection();
            var connection = db.GetConnection(_connectionString);

            string sql = "Select count(*) from User WHERE Mail = @Mail";
            var response = await connection.ExecuteScalarAsync<int>(sql, new { Mail = mail });
            return response;
        }

        public async Task<User> AddUserAsync(User user)
        {
            var db = new DatabaseConection();
            var connection = db.GetConnection(_connectionString);
            Hash hash = new();
            string hashed = hash.GetHashSha256(user.Passwrd);

            string sql = @"INSERT INTO User(Name, Mail, Passwrd, Admin) Values (@Name, @Mail, @Passwrd, @Admin);
                           SELECT last_insert_rowid()";
            int createdId = await connection.ExecuteScalarAsync<int>(sql, new
            {
                user.Name,
                user.Mail,
                Passwrd = hashed,
                Admin = 0
            });

            user.Id = createdId;

            return user;

        }
    }
}
