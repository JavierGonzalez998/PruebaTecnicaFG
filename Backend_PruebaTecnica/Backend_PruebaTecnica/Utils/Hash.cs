using System;
using System.Security.Cryptography;
using System.Text;

namespace Backend_PruebaTecnica.Utils
{
    public class Hash
    {
        public string GetHashSha256(string text)
        {
            var inputBytes = Encoding.UTF8.GetBytes(text);
            var inputHash = SHA256.HashData(inputBytes);
            return Convert.ToHexString(inputHash);
        }
    }
}
