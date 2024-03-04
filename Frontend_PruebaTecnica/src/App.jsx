import { useState, useEffect, useContext } from 'react'
import { Box, Text } from "@chakra-ui/react"
import Utils from "./utils/utils"
import Styles from "./App.module.css"
import SwitchLogin from "./components/SwitchLogin"
import Login from "./components/Login"
import Register from "./components/Register"
import useLanguage from "./hooks/UseLanguage"
import UserContext from './context/User/UserContext'
import BankMenu from "./components/BankMenu"
function App() {
  const { user } = useContext(UserContext);
  const [mode, setMode] = useState(false)
  const { Title } = useLanguage().language.App;
  const { boxShadow } = Utils
  const { Background } = Styles
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    setIsLogged(user.name !== "" ? true : false)
  }, [user])




  return (
    <Box width="100vw" height="100vh" className={Background} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {
        !isLogged ?
          (
            <Box width="50rem" height="40rem" boxShadow={boxShadow} backgroundColor="white" display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center">
              <Text textAlign="center" as="h1">{Title}</Text>
              <SwitchLogin onChecked={setMode} />
              {
                mode ? <Register /> : <Login />
              }

            </Box>
          ) : 
          (
            <Box width="90%" height="90%" boxShadow={boxShadow} backgroundColor="white" mt={5}>
                <BankMenu/>
            </Box>
          )
      }


    </Box>
  )
}

export default App
