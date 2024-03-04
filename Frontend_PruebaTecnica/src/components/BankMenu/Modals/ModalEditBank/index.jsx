import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input, FormControl, FormLabel } from '@chakra-ui/react'
import BankContext from "../../../../context/Bank/BankContext"
import useLanguage from "../../../../hooks/UseLanguage"
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'

function index(props) {
    const { open, onClose, onConfirmEdit, bank } = props
    const handleClose = () => { onClose(false) }
    const { BankMenu } = useLanguage().language
    const [bankName, setBankName] = useState("");
    const [errorForm, setErrorForm] = useState(false);

    const { EditBank, GetBanks } = useContext(BankContext)

    useEffect(() => {
        setBankName(bank.bank_Name)
    }, [bank])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (bankName.trim() == "") {
            setErrorForm(true)
            return
        }
        const Response = EditBank({
            uid: bank.uid,
            account_Number: bank.account_Number,
            iban: bank.iban,
            bank_Name: bankName,
            routing_Number: bank.routing_Number,
            swift_Bic: bank.swift_Bic
        })
        if(Response){
            GetBanks()
            onConfirmEdit({ ...BankMenu.EditBankForm.ToastSuccess, type: "success" })
        }else{
            onConfirmEdit({ ...BankMenu.EditBankForm.ToastError, type: "error" })
        }
        handleClose()
    }
    return (
        <Modal isOpen={open} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{BankMenu.EditBankForm.Title}</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit}>
                    <ModalBody>
                        {errorForm ? (
                            <Alert status='error'>
                                <AlertIcon />
                                <AlertTitle>{BankMenu.EditBankForm.ErrorTitle}</AlertTitle>
                                <AlertDescription>{BankMenu.EditBankForm.ErrorDesc}</AlertDescription>
                            </Alert>
                        ) : null}
                        <FormControl my={2}>
                            <FormLabel>{BankMenu.EditBankForm.BankNameLabel}</FormLabel>
                            <Input type='text' value={bankName} onChange={(e) => setBankName(e.target.value)} />
                        </FormControl>
                        <FormControl my={2}>
                            <FormLabel>{BankMenu.EditBankForm.AccountNumberLabel}</FormLabel>
                            <Input type='text' value={bank.account_Number} disabled />
                        </FormControl>
                        <FormControl my={2}>
                            <FormLabel>{BankMenu.EditBankForm.UidLabel}</FormLabel>
                            <Input type='text' value={bank.uid} disabled />
                        </FormControl>
                        <FormControl my={2}>
                            <FormLabel>{BankMenu.EditBankForm.IbanLabel}</FormLabel>
                            <Input type='text' value={bank.iban} disabled />
                        </FormControl>
                        <FormControl my={2}>
                            <FormLabel>{BankMenu.EditBankForm.RoutingNumberLabel}</FormLabel>
                            <Input type='text' value={bank.routing_Number} disabled />
                        </FormControl>
                        <FormControl my={2}>
                            <FormLabel>{BankMenu.EditBankForm.SwiftBicNumber}</FormLabel>
                            <Input type='text' value={bank.swift_Bic} disabled />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleClose}>
                            {BankMenu.EditBankForm.CloseLabel}
                        </Button>
                        <Button type='submit' backgroundColor="green.300" _hover={{ backgroundColor: "green.500" }}>{BankMenu.EditBankForm.SubmitLabel}</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default index