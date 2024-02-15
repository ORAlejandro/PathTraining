import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return(
        <header className='headerStyle'>
            <nav className='navbarFlex'>
                <h1 className='h1Main'>Path Training</h1>
                <ul className='ulFlex'>
                    <li>Section</li>
                    <li>Performance</li>
                    <li>Status</li>
                    <li>Usuarios</li>
                    <li>User Settings</li>
                </ul>
                <button className='btnLogIn'>Sign In</button>
            </nav>
        </header>
    )
}

export default Navbar