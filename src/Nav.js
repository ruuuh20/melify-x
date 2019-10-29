import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <header className="header">
            <div className="logo">Melify</div>
      
        <nav className="nav">
            <ul className="nav__links">
                <li className="nav-item"><a href="#">Charts</a></li>
                <li className="nav-item"><a href="#">New</a></li>
                <li className="nav-item"><a href="#">Categories</a></li>
                <li className="nav-item"><a href="#">DJ</a></li>
                <li className="nav-item"><a href="#">Magazine</a></li>
            </ul>
        </nav>

        </header>

    )

}

export default Nav;