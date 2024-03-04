import React, { useState,useContext, useEffect } from 'react'
import UseLanguage from "../../hooks/UseLanguage"
import { Box, Input, FormControl, FormLabel, Text, Button, FormErrorMessage, useToast } from "@chakra-ui/react"
import UserContext from '../../context/User/UserContext'

const index = () => {
    const {RegisterUser} = useContext(UserContext)
    const toast = useToast();
    const { RegisterModule } = UseLanguage().language.App
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [errorSamePass, setErrorSamePas] = useState(false);

    useEffect(() => {
        setErrorSamePas(pass !== confirmPass)
    },[pass, confirmPass])

    const HandleSubmit = async(e) => {
        e.preventDefault();
        if (name.trim() == "" || mail.trim() == "" || pass.trim() == "" || confirmPass.trim() == "") {
            toast({
                title: RegisterModule.ToastError.title,
                description: RegisterModule.ToastError.desc,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            return
        }
        if(errorSamePass){
            toast({
                title: RegisterModule.ToastErrorPass.title,
                description: RegisterModule.ToastErrorPass.desc,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            return 
        }
        const res = await RegisterUser(name, mail.toLowerCase(), pass)
        if(!res) {
            toast({
                title: RegisterModule.ToastErrorSubmitRegister.title,
                description: RegisterModule.ToastErrorSubmitRegister.desc,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            return 
        }
    }

    return (
        <Box width="90%" height="100%">
            <form onSubmit={HandleSubmit} >
                <Text as="h2" textAlign="center">{RegisterModule.title}</Text>
                <FormControl my={2}>
                    <FormLabel>{RegisterModule.NameLabel}</FormLabel>
                    <Input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>
                <FormControl my={2}>
                    <FormLabel>{RegisterModule.MailLabel}</FormLabel>
                    <Input type='email' value={mail} onChange={(e) => setMail(e.target.value)} />
                </FormControl>
                <FormControl my={2}>
                    <FormLabel>{RegisterModule.PassLabel}</FormLabel>
                    <Input type='password' value={pass} onChange={(e) => setPass(e.target.value)} />
                </FormControl>
                <FormControl my={2} isInvalid={errorSamePass}>
                    <FormLabel>{RegisterModule.ConfirmPassLabel}</FormLabel>
                    <Input type='password' value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                    {errorSamePass ?
                        <FormErrorMessage>{RegisterModule.ErrorTextConfirmPass}</FormErrorMessage>
                        : null}
                </FormControl>
                <Box w="100%" display="flex" flexDirection="row" justifyContent="center" alignItems="center" mt={5}>
                    <Button type='submit'>{RegisterModule.SubmitLabel}</Button>
                </Box>
            </form>
        </Box>
    )
}

export default index