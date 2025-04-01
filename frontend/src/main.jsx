import {ChakraProvider} from '@chakra-ui/react'
import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import App from './App.jsx'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>

        <App />
      </ChakraProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
