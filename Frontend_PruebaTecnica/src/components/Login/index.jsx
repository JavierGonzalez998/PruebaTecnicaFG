import React, {useState, useContext} from 'react'
import UseLanguage from "../../hooks/UseLanguage"
import { Box, Input, FormControl, FormLabel, Text, Button } from "@chakra-ui/react"
import { useToast } from '@chakra-ui/react'
import UserContext from '../../context/User/UserContext'
const index = () => {
    const { LoginModule } = UseLanguage().language.App
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const toast = useToast()

    const{LoginUser} = useContext(UserContext)
    const handleLogin = async(e) => {
        e.preventDefault()
        if(email.trim() == "" || pass.trim() == ""){
            toast({
                title: LoginModule.ErrorLoginTitle,
                description: LoginModule.ErrorLoginEmptyField,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            
            return
        }
        const res = await LoginUser(email,pass)
        if (!res){
            toast({
                title: LoginModule.ErrorLoginTitle,
                description: LoginModule.ErrorLoginNoUser,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            
            return 
        }
    }

    return (
        <Box width="90%" my="5%" height="60%">
            <form onSubmit={handleLogin}>
                <Text as="h2" textAlign="center">{LoginModule.title}</Text>
                <FormControl my={2}>
                    <FormLabel>{LoginModule.MailLabel}</FormLabel>
                    <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </FormControl>
                <FormControl my={2}>
                    <FormLabel>{LoginModule.PassLabel}</FormLabel>
                    <Input type='password' value={pass} onChange={(e) => setPass(e.target.value)} />
                </FormControl>
                <Box w="100%" display="flex" flexDirection="row" justifyContent="center" alignItems="center" mt={5}>
                    <Button type='submit'>{LoginModule.SubmitLabel}</Button>
                </Box>
            </form>
        </Box>
    )
}

export default index