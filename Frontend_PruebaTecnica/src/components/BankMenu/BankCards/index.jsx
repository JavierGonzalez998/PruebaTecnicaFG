import React, { useContext } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Text, Heading, Image, Button } from '@chakra-ui/react'
import UserContext from "../../../context/User/UserContext";
import useLanguage from "../../../hooks/UseLanguage"

const index = (props) => {
    const { bank, onEdit, onDelete } = props
    const { user } = useContext(UserContext)
    const {EditBankForm, DeleteBank} = useLanguage().language.BankMenu
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            size="sm"
        >
            <Stack>
                <CardBody>
                    <Heading size='sm' py={1}>{bank.bank_Name}</Heading>
                    <Stack direction="column">
                    <Text>
                        {EditBankForm.AccountNumberLabel}: {bank.uid}
                    </Text>
                    <Text>
                        {EditBankForm.UidLabel}: {bank.uid}
                    </Text>
                    </Stack>
                </CardBody>

                <CardFooter>
                    {user.admin === 1 ? (
                        <Stack direction="row" gap={3}>
                            <Button variant='solid' colorScheme='blue' onClick={() => onEdit(bank)}>
                                {EditBankForm.Title}
                            </Button>
                            <Button variant='solid' colorScheme='red' onClick={() => onDelete(bank.uid)}>
                                {DeleteBank.Title}
                            </Button>
                        </Stack>
                    ) : null}
                </CardFooter>
            </Stack>
        </Card>
    )
}

export default index