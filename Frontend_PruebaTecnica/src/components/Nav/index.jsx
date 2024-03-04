import React,{useContext, useState} from 'react'
import {Box, Stack, Switch,Image} from '@chakra-ui/react'
import Utils from '../../utils/utils'
import ES from "../../assets/es.svg"
import US from "../../assets/us.svg"
import LangContext from '../../context/Lang/LangContext'

const index = ({children}) => {
    const {backgroundTheme} = Utils
    const {lang, setLang} = useContext(LangContext);
    const [switched, setSwitched] = useState(lang === "en");
    const handleCheck = (e) => {
        const state = e.target.checked
        if(state){
            setLang("en")
            setSwitched(state)
            return
        }

        setLang("es")
        setSwitched(state)
    }

  return (
    <>
        <Box width="100vw" height="5vh" backgroundColor={backgroundTheme} position="fixed" top="0" zIndex={100} display="flex" flexDirection="row-reverse" alignItems="center" >
            <Stack mr={10} direction="row" alignItems="center">
                <Image src={ES} w={10} h={10}/>
                <Switch size="md" isChecked={switched} onChange={handleCheck} />
                <Image src={US} w={10} h={10}/>
            </Stack>
        </Box>
        {children}
    </>

  )
}

export default index