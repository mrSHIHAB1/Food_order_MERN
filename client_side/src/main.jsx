import React  from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';



createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)
