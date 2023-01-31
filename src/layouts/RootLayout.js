import React from 'react'
import { Link,NavLink,Outlet } from 'react-router-dom'
export default function RootLayout() {
  return (
    <div className='root-layout'>
         <header><h1>Jobarouter</h1>
    <Link to="/">Home</Link>
    <NavLink to="about">About</NavLink>
    </header>

    <main>

        <Outlet/>
    </main>

    </div>
  )
}
