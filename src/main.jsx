import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layouts/Main'
import Home from './pages/Home'
import AddCoffee from './pages/AddCoffee'
import UpdateCoffee from './pages/UpdateCoffee'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path:'/addCoffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path:'/updateCoffee/:_id',
        element:<UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params._id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
