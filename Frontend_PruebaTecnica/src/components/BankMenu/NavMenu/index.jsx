import React, { useContext } from 'react'
import { Box, Button, Divider, Image, Text, Tooltip } from "@chakra-ui/react"
import userProfile from "../../../assets/userProfile.svg"
import UserContext from '../../../context/User/UserContext'
import LogoutImg from "../../../assets/logout.svg"
import useLanguage from "../../../hooks/UseLanguage"
const index = () => {
    const { user, Logout } = useContext(UserContext)
    const { BankMenu } = useLanguage().language
    return (
        <>
            <Box w="100%" display="flex" flexDirection="row-reverse" alignItems="center">
                <Tooltip label={BankMenu.LogoutButtonText}>
                    <Button backgroundColor="transparent" onClick={() => Logout()}>
                        <Image
                            boxSize="sm"
                            w={10}
                            h={10}
                            objectFit="cover"
                            src={LogoutImg}
                            alt='logout'
                            mx={4}
                        />
                    </Button>
                </Tooltip>


                <Image
                    boxSize="sm"
                    w={10}
                    h={10}
                    objectFit="cover"
                    src={userProfile}
                    alt='image profile'
                    mx={4}
                />
                <Text as="h6">{user.mail}</Text>
                <Text as="h6" mx={4}>{user.name}</Text>
            </Box>
            <Divider />
        </>
    )
}

export default index