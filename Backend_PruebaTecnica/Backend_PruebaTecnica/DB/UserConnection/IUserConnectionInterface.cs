using Backend_PruebaTecnica.Models;

namespace Backend_PruebaTecnica.DB.UserConnection
{
    public interface IUserConnectionInterface
    {
        Task<IEnumerable<User>> LoginAsync(User user);
        Task<User> AddUserAsync(User user);
        Task<int> ValidateMail(string mail);
    }
}
