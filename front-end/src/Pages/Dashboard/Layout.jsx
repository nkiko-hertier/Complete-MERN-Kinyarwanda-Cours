import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  
  const isLoggedIn = localStorage.getItem('auth');

  const Logout = () => {
    localStorage.removeItem('auth')
    location.href = '/'
  }
  if (!isLoggedIn) {
    alert("Login First")
    location.href = '/'
  }
  return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={Logout}>Logout</button>
        <nav>
            <a href='/dashboard'>Home</a>
        </nav>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout