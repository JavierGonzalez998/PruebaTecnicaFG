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

const index = (props) => {
    const { open, onClose, onConfirmAdd } = props
    const handleClose = () => { onClose(false) }
    const { BankMenu } = useLanguage().language
    const [bankName, setBankName] = useState("")
    const [uid, setUid] = useState("")
    const [iban, setIban] = useState("")
    const [accountNumber, setAccountNumber] = useState("")
    const [routingNumber, setRoutingNumber] = useState("")
    const [swiftBic, setSwiftBic] = useState("")
    const [errorForm, setErrorForm] = useState(false);

    const { AddBank, GetBanks } = useContext(BankContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (bankName.trim() == "" || uid.trim() == "" || iban.trim() == "" || accountNumber.trim() == "" || routingNumber.trim() == "" || swiftBic.trim() == "") {
            setErrorForm(true)
            return
        }
        const Response = AddBank({
            uid,
            account_Number: accountNumber,
            iban,
            bank_Name: bankName,
            routing_Number: routingNumber,
            swift_Bic: swiftBic
        })
        if (Response) {
            GetBanks()
            onConfirmAdd({ ...BankMenu.AddBankForm.ToastSuccess, type: "success" })
        } else {
            onConfirmAdd({ ...BankMenu.AddBankForm.ToastError, type: "error" })
        }

        handleClose()
    }
    return (
        <Modal isOpen={open} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{BankMenu.AddBankForm.Title}</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit}>
                    <ModalBody>
                        {errorForm ? (
                            <Alert status='error'>
                                <AlertIcon />
                                <AlertTitle>{BankMenu.AddBankForm.ErrorTitle}</AlertTitle>
                                <AlertDescription>{BankMenu.AddBankForm.ErrorDesc}</AlertDescription>
                            </Alert>
                        ) : null}
                        <FormControl my={2}>
                            <FormLabel>{BankMenu.AddBankForm.BankNameLabel}</FormLabel>
                            <Input type='text' value={bankName} onChange={(e) => setBankName(e.target.value)} />
                        </FormControl>
                        <FormControl my={2}>
                            <FormLabel>{BankMenu.AddBankForm.AccountNumberLabel}</FormLabel>
                            <Input type='text' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
                        </FormControl>
                        <FormControl my={2}>
                            <FormLabel>{BankMenu.AddBankForm.UidLabel}</FormLabel>
                            <Input type='text' value={uid} onChange={(e) => setUid(e.target.value)} />
                        </FormControl>
                        <FormControl my={2}>
                            <FormLabel>{BankMenu.AddBankForm.IbanLabel}</FormLabel>
                            <Input type='text' value={iban} onChange={(e) => setIban(e.target.value)} />
                        </FormControl>
                        <FormControl my={2}>
                            <FormLabel>{BankMenu.AddBankForm.RoutingNumberLabel}</FormLabel>
                            <Input type='text' value={routingNumber} onChange={(e) => setRoutingNumber(e.target.value)} />
                        </FormControl>
                        <FormControl my={2}>
                            <FormLabel>{BankMenu.AddBankForm.SwiftBicNumber}</FormLabel>
                            <Input type='text' value={swiftBic} onChange={(e) => setSwiftBic(e.target.value)} />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleClose}>
                            {BankMenu.AddBankForm.CloseLabel}
                        </Button>
                        <Button type='submit' backgroundColor="green.300" _hover={{ backgroundColor: "green.500" }}>{BankMenu.AddBankForm.SubmitLabel}</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default index