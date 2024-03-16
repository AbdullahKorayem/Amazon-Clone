import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 import { CustomProvider } from 'rsuite';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <CustomProvider theme="dark">
       <App />
    </CustomProvider>
  </React.StrictMode>,
)
