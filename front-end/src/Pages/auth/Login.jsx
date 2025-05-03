import React from 'react'

function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('auth', 'true');
      location.href = '/dashboard';
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='username'
        onInput={(e) => setUsername(e.target.value)}
         placeholder='Username' />
        <input type="password" name='password'
        onInput={(e) => setPassword(e.target.value)}
         placeholder='Password' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login