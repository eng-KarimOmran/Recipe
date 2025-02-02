import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Categorys from './Components/Categorys/Categorys'
import HandleRouter from './Components/HandleRouter/HandleRouter'
import NotFound from './Components/NotFound/NotFound'
import RecipeDetails from './Components/RecipeDetails/RecipeDetails';
function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {path:'/',element:<Layout />,children:[
      {index:true,element:<Categorys />},
      {path:'categorys',element:<HandleRouter />},
      {path:'categorys/:id',element:<Categorys />},
      {path:'recipe/:id',element:<RecipeDetails />},
      {path:'*',element:<NotFound />}
    ]}
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
