import React, { useEffect } from 'react'
import { useState } from 'react'

function Products() {
  const sampleData = []
  const [products, setProducts] = useState(sampleData);
  useEffect(() =>{
    fetch('/api/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  const HandleDelete = (id) => {
    fetch(`/api/products/${id}`, {method: 'DELETE'})
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setProducts(products.filter(product => product._id !== id))
    })
  }
  return (
    <div>
      <h1>Products List</h1>
      <a href="/dashboard/products/add">Add product</a>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
          {products.map(product =>
            <tr key={product._id}>
              <td>
                <p>
                  {product._id}
                </p>
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <a href={`/dashboard/products/edit/${product._id}`}>Edit</a>
                <button onClick={()=> {HandleDelete(product._id)}}>Delete</button>
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products