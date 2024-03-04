import React from 'react'
import { Switch, Stack } from '@chakra-ui/react'
import UseLanguage from "../../hooks/UseLanguage"

const index = (props) => {
    const {onChecked} = props;
    const [isChecked, setIsChecked] = React.useState(false)
    const {language} = UseLanguage()
    const handleCheck = (e) => {
        const state = e.target.checked
        setIsChecked(state)
        onChecked(state)
    }

    return (
        <Stack width="100%" height="20%" direction="row" alignItems="center" justifyContent="center">
        <p>{language.App.LoginSwitchLabel}</p>
        <Switch checked={isChecked} onChange={handleCheck}/>
        <p>{language.App.RegisterSwitchLabel}</p>


      </Stack>
    )
}

export default index