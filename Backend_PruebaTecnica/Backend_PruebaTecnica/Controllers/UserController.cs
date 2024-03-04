using Backend_PruebaTecnica.DB.BankConnection;
using Backend_PruebaTecnica.DB.UserConnection;
using Backend_PruebaTecnica.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend_PruebaTecnica.Controllers
{
    [ApiController]
    [Route("user")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly IUserConnectionInterface _UserConnection;

        public UserController(ILogger<UserController> logger, IUserConnectionInterface userConnection)
        {
            _logger = logger;
            _UserConnection = userConnection;
        }
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(User user)
        {
            try
            {
                var response = await _UserConnection.LoginAsync(user);
                if(response == null)
                {
                    return NotFound(new
                    {
                        statusCode = 404,
                        message = "No se encuentra el Usuario"
                    });
                }

                return Ok(response);
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
        [Route("register")]
        public async Task<IActionResult> UserRegister(User user)
        {
            try
            {
                var Validate = _UserConnection.ValidateMail(user.Mail);

                if (Validate.Result == 0)
                {
                    var createdUser = await _UserConnection.AddUserAsync(user);
                    return CreatedAtAction(nameof(UserRegister), createdUser);
                }
                return Ok("");


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
