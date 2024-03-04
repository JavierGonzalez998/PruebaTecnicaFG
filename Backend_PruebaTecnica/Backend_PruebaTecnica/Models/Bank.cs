namespace Backend_PruebaTecnica.Models
{
    public class Bank
    {
        public int? Id { get; set; }
        public string? Uid { get; set; }
        public string? Account_Number { get; set; }
        public string? Iban { get; set; }
        public string? Bank_Name { get; set; }
        public string? Routing_Number { get; set; }
        public string? Swift_Bic { get; set; }
        public string? Created_At { get; set; }
        public string? Updated_At { get; set; }
        public string? Deleted_At { get; set; }


    }

    public class BankResponse 
    {
        public IEnumerable<Bank>? Data { get; set; }
        public int Total { get; set; }
        public int Page {get; set; }
        public int Size { get; set; }
    }
}
