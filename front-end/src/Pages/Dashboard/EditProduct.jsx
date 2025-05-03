import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function EditProduct() {
    const { id } = useParams();
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');

    useEffect(()=> {
        fetch(`/api/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setName(data.name)
            setPrice(data.price)
        })
    }, [])

    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(name, price)
        const data = {name, price}
        fetch(`/api/products/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        ) .then(res => res.json())
        .then(data => alert(data.message))
    }
  return (
    <div>
        <h1>Edit product</h1>
        <form action="" onSubmit={HandleSubmit}>
            <input type="text" name='name'
                value={name}
                onInput={(e) => setName(e.target.value)}
             placeholder='Name' />
            <input type="number" name='price'
                value={price}
                onInput={(e) => setPrice(e.target.value)}
             placeholder='Price 0.000' />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default EditProduct