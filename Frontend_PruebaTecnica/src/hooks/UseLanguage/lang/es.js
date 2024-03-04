export default {
    App: {
        Title: "Bienvenido/a! ❤",
        LoginSwitchLabel: "Iniciar Sesion",
        RegisterSwitchLabel: "Registrar",
        LoginModule: {
            title: "Inicio de sesión",
            MailLabel: "Ingrese su correo",
            PassLabel: "Ingrese su contraseña",
            SubmitLabel: "Iniciar Sesión",
            ErrorLoginTitle: "Error",
            ErrorLoginEmptyField: "Por favor, ingrese su correo y contraseña",
            ErrorLoginNoUser: "Su correo y contraseña no coinciden con nuestros registros. Por favor, revise su correo o contraseña"
        },
        RegisterModule: {
            title: "Registro de usuario",
            NameLabel: "Ingrese su nombre",
            MailLabel: "Ingrese su correo",
            PassLabel: "Ingrese su contraseña",
            ConfirmPassLabel: "Confirme su contraseña",
            ErrorTextConfirmPass: "La contraseña debe ser igual a la anterior",
            SubmitLabel: "Registrar",
            ToastError: {
                title: "Error",
                desc: "Algunos campos necesitan ser completados. Por favor, revísalos"
            },
            ToastErrorPass: {
                title: "Error",
                desc: "Las contraseñas no coinciden. Por favor revíselas"
            },
            ToastErrorSubmitRegister: {
                title: "Error",
                desc: "No se pudo realizar el registro de usuario. Por favor, intente más tarde"
            }
        },
    },
    BankMenu: {
        Title: "Bancos",
        LogoutButtonText: "Cerrar Sesión",
        ButtonAddBankLabel: 'Añadir banco',
        SearchBarTitle: "Buscar por UID",
        EmptyRegister: "No se encuentra ningún registro, puedes refrescar pulsando este boton",
        AddBankForm: {
            Title: "Añadir Banco",
            UidLabel: "UID",
            AccountNumberLabel: "Numero de cuenta",
            IbanLabel: "IBAN",
            BankNameLabel: "Nombre del banco",
            RoutingNumberLabel: "Numero de ruta",
            SwiftBicNumber: "Codigo Swift/Bic",
            SubmitLabel: "Agregar Banco",
            CloseLabel: "Cerrar",
            ErrorTitle: "Campos en blanco",
            ErrorDesc: "Hay campos sin completar. Por favor revisar",
            ToastError: {
                title: "Error",
                desc: "Error intentando agregar el banco, por favor intente nuevamente"
            },
            ToastSuccess: {
                title: "Exito",
                desc: "El banco ha sido agregado satisfactoriamente"
            }
        },
        EditBankForm: {
            Title: "Editar banco",
            UidLabel: "UID",
            AccountNumberLabel: "Numero de cuenta",
            IbanLabel: "IBAN",
            BankNameLabel: "Nombre del banco",
            RoutingNumberLabel: "Numero de ruta",
            SwiftBicNumber: "Codigo Swift/Bic",
            SubmitLabel: "Editar Banco",
            CloseLabel: "Cerrar",
            ErrorTitle: "Campos en blanco",
            ErrorDesc: "Hay campos sin completar. Por favor revisar",
            ToastError: {
                title: "Error",
                desc: "Error intentando modificar el banco, por favor intente nuevamente"
            },
            ToastSuccess: {
                title: "Exito",
                desc: "El banco ha sido modificado satisfactoriamente"
            }
        },
        DeleteBank: {
            Title:"Borrar Banco",
            TextConfirm: "¿Estás seguro/a que desea eliminar este banco?",
            ConfirmButtonText: "Si",
            CloseModalButtonText: "No",
            ToastError: {
                title: "Error",
                desc: "Error intentando eliminar el banco, por favor intente nuevamente"
            },
            ToastSuccess: {
                title: "Exito",
                desc: "El banco ha sido eliminado satisfactoriamente"
            }
        }
    }
}