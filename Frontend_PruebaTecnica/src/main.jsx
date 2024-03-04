import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

import LangState from './context/Lang/LangState.jsx'
import UserState from "./context/User/UserState.jsx"
import Nav from "./components/Nav"
import BankState from './context/Bank/BankState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <LangState>
        <Nav>
          <UserState>
            <BankState>
              <App />
            </BankState>
          </UserState>
        </Nav>
      </LangState>
    </ChakraProvider>
  </React.StrictMode>,
)
