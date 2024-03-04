using Backend_PruebaTecnica.Models;

namespace Backend_PruebaTecnica.DB.BankConnection
{
    public interface IBankConnectionInterface
    {
        Task<BankResponse> getBankAsync(int page, int size);
        Task<BankResponse> getBankByUIDAsync(string uid);
        Task<Bank> AddBankAsync(Bank bank);
        Task EditBankName(Bank bank);
        Task DeleteBank(string uid);
    }
}
