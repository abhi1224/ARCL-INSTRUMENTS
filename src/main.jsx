import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import ScientficEquipment from './pages/ScientificEquipment.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <App />,
//     children: [
//       {
//           path: "",
//           element: <Home />
//       },
//       {
//           path: "products",
//           element: <Product />
//       },
//       {
//           path: "about",
//           element: <About />
//       },
//       {
//           path: "contact",
//           element: <Contact />
//       },
//       {
//           path: "scientific-equipment",
//           element: <ScientficEquipment />
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home />} />
      <Route path='products' element={<Product />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='scientific-equipment' element={<ScientficEquipment />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
