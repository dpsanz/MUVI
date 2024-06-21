import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import PageNotFound from './Pages/PageNotFound.jsx'
import Filmes from './Pages/Filmes.jsx'
import Home from './Pages/Home.jsx'
import PaginaFilme from './Pages/PaginaFilme.jsx'
import News from './Pages/News.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
        {index: true, element: <Home/> },
        {path: "filmes", element: <Filmes/>},
        {path: "filmes/:id", element: <PaginaFilme/>},
        {path: "news", element: <News/>},
        {path: "*", element: <PageNotFound/>}
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
