namespace Backend_PruebaTecnica.Models
{
    public class User
    {
        public int? Id { get; set; }
        public string? Name { get; set; }
        public string? Mail { get; set; }
        public string? Passwrd { get; set; }
        public int Admin { get; set; }
    }
}
