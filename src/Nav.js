import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <header className="header">
            <div className="logo">Melify-X</div>
      
        <nav className="nav">
            <ul className="nav__links">
                <li className="nav-item"><a href="#">Home</a></li>
                <li className="nav-item"><a href="#">Chart</a></li>
                <li className="nav-item"><a href="#">New</a></li>
            </ul>
        </nav>

        </header>

    )

}

export default Nav;