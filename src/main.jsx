import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import myCreatedRoute from './Router/Route'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
