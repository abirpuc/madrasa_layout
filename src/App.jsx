import { useState } from 'react'

import './App.css'
import TopBanner from './SharedComponent/topBanner/TopBanner'
import Layout from './Layout/Layout'
import { RouterProvider } from 'react-router-dom'
import { route } from './Router/Routes'

function App() {

  return (
    <>
        <RouterProvider router={route}>
          
        </RouterProvider>
    </>
  )
}

export default App
