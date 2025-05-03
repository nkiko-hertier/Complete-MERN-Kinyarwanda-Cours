import React from 'react'

function AddProduct() {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');

    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(name, price)
        const data = {name, price}
        fetch('/api/products', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        ) .then(res => res.json())
        .then(data => alert(data.message))
    }
  return (
    <div>
        <h1>Add product</h1>
        <form action="" onSubmit={HandleSubmit}>
            <input type="text" name='name'
                onInput={(e) => setName(e.target.value)}
             placeholder='Name' />
            <input type="number" name='price'
                onInput={(e) => setPrice(e.target.value)}
             placeholder='Price 0.000' />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default AddProduct