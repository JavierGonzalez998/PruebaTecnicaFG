import React, { useContext, useEffect, useState } from 'react'
import { Box, Text, Grid, Button, Divider, Stack, IconButton } from '@chakra-ui/react'
import NavMenu from "./NavMenu"
import BankContext from "../../context/Bank/BankContext"
import useLanguage from "../../hooks/UseLanguage"
import BankCards from './BankCards'
import ModalAddBank from "./Modals/ModalAddBank"
import ModalEditBank from "./Modals/ModalEditBank"
import ModalDeleteBank from "./Modals/ModalDeleteBank"
import Paginate from "../Paginate"
import UserContext from '../../context/User/UserContext'
import { useToast } from '@chakra-ui/react'
import SearchBar from "./SearchBar"
import {RepeatIcon} from "@chakra-ui/icons"
const index = () => {
    const { user } = useContext(UserContext)
    const { banks, GetBanks, GetBankByUID } = useContext(BankContext)
    const { BankMenu } = useLanguage().language
    const [size, setSize] = useState(10)
    const [page, setPage] = useState(1)
    const [selectedBank, setSelectedBank] = useState({})
    const [openModalEdit, setOpenModalEdit] = useState(false)
    const [openModalAdd, setOpenModalAdd] = useState(false)
    const [openModalDelete, setOpenModalDelete] = useState(false)
    const [selectedUID, setSelectedUID] = useState("");

    const toast = useToast();
    const Reload = () => GetBanks(page, size)

    useEffect(() => {
        GetBanks(page, size)
    }, [page, size])

    const HandleEdit = (bank) => {
        setSelectedBank(bank)
        setOpenModalEdit(true)

    }

    const handleDelete = (uid) => {
        setSelectedUID(uid)
        setOpenModalDelete(true)
    }
    useEffect(() => {
        console.log(openModalDelete)
    }, [openModalDelete])
    return (
        <Box w="100%" h="100%" overflow="scroll">
            <NavMenu />
            <Text as="h1" fontSize='4xl' textAlign="center">{BankMenu.Title}</Text>
            <Divider my={3}/>
            <Box as="section" w="100%" display="flex" flexDirection="row-reverse" justifyContent="space-around">
                {user.admin === 1 ?
                    (
                        <Button backgroundColor="green.300" _hover={{ backgroundColor: "green.500" }} onClick={() => setOpenModalAdd(true)}>
                            {BankMenu.ButtonAddBankLabel}
                        </Button>
                    ) : null
                }
                <SearchBar />
            </Box>
            <Box as='section' w="100%" height="60%">
                <Grid
                    gap={3}
                    mt={20}
                    px={20}
                    templateColumns="repeat(5, 1fr)"
                    templateRows="repeat(2, 1fr)"
                >
                    {banks.data.length > 0 ?
                        banks.data.map((bank, key) => {
                            return (
                                <BankCards bank={bank} key={key} onEdit={HandleEdit} onDelete={handleDelete} />
                            )
                        }) : <Stack>
                                <Text textAlign="center">{BankMenu.EmptyRegister}</Text>
                                <IconButton onClick={() => Reload()} aria-label='refresh' icon={<RepeatIcon/>}></IconButton>
                            </Stack>
                        }
                </Grid>
            </Box>
            <Box w="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={4}>
                {banks.data.length > 0 ?
                <Paginate total={banks.total} changePage={setPage} size={banks.size} /> : null }
                
            </Box>
            <ModalAddBank open={openModalAdd} onClose={setOpenModalAdd} onConfirmAdd={(data) => toast({
                title: data.title,
                description: data.desc,
                status: data.type,
                duration: 9000,
                isClosable: true,
            })} />
            <ModalEditBank open={openModalEdit} onClose={setOpenModalEdit} bank={selectedBank} onConfirmEdit={(data) => toast({
                title: data.title,
                description: data.desc,
                status: data.type,
                duration: 9000,
                isClosable: true,
            })} />
            <ModalDeleteBank open={openModalDelete} onClose={setOpenModalDelete} uid={selectedUID} onConfirmDelete={(data) => toast({
                title: data.title,
                description: data.desc,
                status: data.type,
                duration: 9000,
                isClosable: true,
            })} />
        </Box>
    )
}


export default index