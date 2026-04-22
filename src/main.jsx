import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootFile from './components/rootFile/RootFile.jsx'
import Footer from './components/footer/Footer.jsx'
import Home from './components/home/Home.jsx'
import ShowProduct from './components/home/product/showProduct.jsx'
import ContextApi from './contextApi/ContextApi.jsx'
import StartPlan from './components/home/startPlan/StartPlan.jsx'
import { ToastContainer } from 'react-toastify'



const router = createBrowserRouter([
  {
    path:"/",
    element:<RootFile></RootFile>,
    children:[{
      index:true,
      element:<Home></Home>,   
    }]},
    {
    path:"/showProduct",
    element:<ShowProduct></ShowProduct>
    },
 
    {
      path:"/footer",
     element:<Footer></Footer>
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
<ContextApi>
<RouterProvider router={router}></RouterProvider>
<ToastContainer></ToastContainer>
</ContextApi>
    
  </StrictMode>,
)
