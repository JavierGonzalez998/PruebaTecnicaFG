using Backend_PruebaTecnica.DB.BankConnection;
using Backend_PruebaTecnica.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.ComponentModel;

namespace Backend_PruebaTecnica.Controllers
{
    [ApiController]
    [Route("bank")]
    public class BankController : ControllerBase
    {
        private readonly ILogger<BankController> _logger;
        private readonly IBankConnectionInterface _bankConnection;

        public BankController(ILogger<BankController> logger, IBankConnectionInterface bankConnection)
        {
            _logger = logger;
            _bankConnection = bankConnection;
        }

        [HttpGet]
        [Route("all")]
        public async Task<IActionResult> GetBank(int page, int size)
        {
            try
            {
                var Banks = await _bankConnection.getBankAsync(page, size);
                return Ok(Banks);
            
            } catch(Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    statusCode = 500,
                    message = ex.Message
                });
            }
        }
        [HttpGet]
        [Route("{uid}")]
        public async Task<IActionResult> GetBankById(string uid)
        {
            try
            {
                var Banks = await _bankConnection.getBankByUIDAsync(uid);
                if (Banks == null)
                {
                    return NotFound(new
                    {
                        statusCode = 404
                        ,
                        message = "No se encuentra el Banco"
                    });
                }

                return Ok(Banks);

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    statusCode = 500,
                    message = ex.Message
                });
            }
        }

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> CreateBank(Bank bank) {
            try
            {
                var createdBank = await _bankConnection.AddBankAsync(bank);
                return CreatedAtAction(nameof(CreateBank), createdBank);

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    statusCode = 500,
                    message = ex.Message
                });
            }
        }
        [HttpPut]
        [Route("edit")]
        public async Task<IActionResult> UpdateBankName(Bank bank)
        {
            try
            {
                var BankResponse = await _bankConnection.getBankByUIDAsync(bank.Uid);
                if (BankResponse == null)
                {
                    return NotFound(new
                    {
                        statusCode = 404
                        ,
                        message = "No se encuentra el Banco"
                    });
                }
                await _bankConnection.EditBankName(bank);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    statusCode = 500,
                    message = ex.Message
                });
            }
        }
        [HttpDelete]
        [Route("{uid}")]
        public async Task<IActionResult> DeleteBank(string uid)
        {
            try
            {
                var BankResponse = await _bankConnection.getBankByUIDAsync(uid);
                if (BankResponse == null)
                {
                    return NotFound(new
                    {
                        statusCode = 404
                        ,
                        message = "No se encuentra el Banco"
                    });
                }
                await _bankConnection.DeleteBank(uid);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    statusCode = 500,
                    message = ex.Message
                });
            }
        }

    }
}
