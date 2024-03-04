export default {
    App: {
        Title: "Welcome! ❤",
        LoginSwitchLabel: "Login",
        RegisterSwitchLabel: "Register",
        LoginModule: {
            title: "Login",
            MailLabel: "Enter your mail",
            PassLabel: "Enter your password",
            SubmitLabel: "Login",
            ErrorLoginTitle: "Error",
            ErrorLoginEmptyField: "Please enter your mail and password",
            ErrorLoginNoUser: "Your mail and password don't match with our registers. Please check your mail or password"
        },
        RegisterModule: {
            title: "User Register",
            NameLabel: "Enter your name",
            MailLabel: "Enter your mail",
            PassLabel: "Enter your password",
            ConfirmPassLabel: "Confirm your password",
            ErrorTextConfirmPass: "Your confirm password must be the same as your password",
            SubmitLabel: "Register",
            ToastError: {
                title: "Error",
                desc: "Some Fields need to be completed. Please, check it"
            },
            ToastErrorPass: {
                title: "Error",
                desc: "The password and confirm password not match, please check them"
            },
            ToastErrorSubmitRegister: {
                title: "Error",
                desc: "Error trying register your user. Please, try again later"
            }
        },
    },
    BankMenu: {
        Title: "Banks", 
        LogoutButtonText: "Log out",
        ButtonAddBankLabel: 'Add Bank',
        SearchBarTitle: "Search by UID",
        EmptyRegister: "No record found, you can refresh pressing this button",
        AddBankForm: {
            Title: "Add Bank",
            UidLabel: "UID",
            AccountNumberLabel: "Account Number",
            IbanLabel: "IBAN",
            BankNameLabel: "Bank Name",
            RoutingNumberLabel: "Routing Number",
            SwiftBicNumber: "Swift/Bic",
            SubmitLabel: "Add Bank",
            CloseLabel: "Close",
            ErrorTitle: "Unfilled Fields",
            ErrorDesc: "There are blank fields. Please check it",
            ToastError: {
                title: "Error",
                desc: "Error trying add bank, please retry"
            },
            ToastSuccess: {
                title: "Success",
                desc: "The Bank was added successfully"
            }
        },
        EditBankForm: {
            Title: "Edit Bank",
            UidLabel: "UID",
            AccountNumberLabel: "Account Number",
            IbanLabel: "IBAN",
            BankNameLabel: "Bank Name",
            RoutingNumberLabel: "Routing Number",
            SwiftBicNumber: "Swift/Bic",
            SubmitLabel: "Edit Bank",
            CloseLabel: "Close",
            ErrorTitle: "Unfilled Fields",
            ErrorDesc: "There are blank fields. Please check it",
            ToastError: {
                title: "Error",
                desc: "Error trying modify bank, please retry"
            },
            ToastSuccess: {
                title: "Success",
                desc: "The Bank was modified successfully"
            }
        },
        DeleteBank: {
            Title:"Delete Bank",
            TextConfirm: "Are you sure you want to delete this bank?",
            ConfirmButtonText: "Yes",
            CloseModalButtonText: "No",
            ToastError: {
                title: "Error",
                desc: "Error trying deleting bank, please retry"
            },
            ToastSuccess: {
                title: "Success",
                desc: "The Bank was deleted successfully"
            }
        }
        
    }
}