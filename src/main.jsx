import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api';
import { router } from './router.jsx'
import './index.css'
import "primereact/resources/themes/lara-light-cyan/theme.css"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router}/>
    </PrimeReactProvider>
  </React.StrictMode>,
)
