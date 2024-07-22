import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api';
import { router } from './router.jsx'
import './index.css'
import "primereact/resources/themes/lara-light-cyan/theme.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router}/>
    </PrimeReactProvider>
  </React.StrictMode>,
)
