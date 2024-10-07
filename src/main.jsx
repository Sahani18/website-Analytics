
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routing } from './routing'
import './index.css'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routing} />
  
 
)
