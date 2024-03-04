import React, { useContext } from 'react'
import {Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,Text } from '@chakra-ui/react'
import BankContext from "../../../../context/Bank/BankContext"
import useLanguage from "../../../../hooks/UseLanguage"


const index = (props) => {
    const { open, onClose, onConfirmDelete, uid } = props
    const handleClose = () => { onClose(false) }
    const { BankMenu } = useLanguage().language

    const { DeleteBank, GetBanks } = useContext(BankContext)

    const handleDelete = () => {
        const Response = DeleteBank(uid)

        if(Response){
            GetBanks()
            onConfirmDelete({ ...BankMenu.DeleteBank.ToastSuccess, type: "success" })

        }else{
            onConfirmDelete({ ...BankMenu.DeleteBank.ToastError, type: "error" })
        }
        handleClose()
    }

    return (
        <Modal isOpen={open} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{BankMenu.DeleteBank.Title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>
                        {BankMenu.DeleteBank.TextConfirm}
                    </Text>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={handleClose}>
                        {BankMenu.DeleteBank.CloseModalButtonText}
                    </Button>
                    <Button colorScheme='red' onClick={handleDelete}>{BankMenu.DeleteBank.ConfirmButtonText}</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )

}

export default index