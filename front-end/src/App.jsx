import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/auth/Login'
import Products from './Pages/Dashboard/Products'
import Layout from './Pages/Dashboard/Layout'
import AddProduct from './Pages/Dashboard/AddProduct'
import EditProduct from './Pages/Dashboard/EditProduct'
import Home from './Pages/Dashboard/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route element={<Layout />}>
            <Route path='/dashboard' element={<Home />} />
            <Route path='/dashboard/products' element={<Products />} />
            <Route path='/dashboard/products/add' element={<AddProduct />} />
            <Route path='/dashboard/products/edit/:id' element={<EditProduct />} />
            <Route path='*' element={<h1>Page Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App