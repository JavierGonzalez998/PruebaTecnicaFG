import React, { useState, useContext } from 'react'
import { Box, Stack, FormControl, FormLabel, IconButton, Input } from "@chakra-ui/react"
import UseLanguage from "../../../hooks/UseLanguage"
import { SearchIcon } from '@chakra-ui/icons'
import BankContext from "../../../context/Bank/BankContext"


const index = () => {
    const {BankMenu} = UseLanguage().language
    const [Uid, setUid] = useState("")
    const {GetBankByUID, GetBanks} = useContext(BankContext);

    const HandleSubmit = (e) => {
        e.preventDefault();
        if(Uid.trim() === ""){
            GetBanks()
            return
        }
        GetBankByUID(Uid)
    }
    return (
        <Box width="60%">
            <form onSubmit={HandleSubmit}>
                <Stack direction="row">
                    <FormControl>
                        <Input type='text' value={Uid} onChange={(e) => setUid(e.target.value)} placeholder={BankMenu.SearchBarTitle} />
                    </FormControl>
                    <IconButton type='submit' aria-label='Search UID' icon={<SearchIcon />} />
                </Stack>
            </form>
        </Box>
    )
}

export default index