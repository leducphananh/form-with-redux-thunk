import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ navItems }) {
    return (
        <nav className="header__navbar">
            <ul className="nav-list">
                {navItems.map((navItem, index) =>
                    <li key={index}>
                        <NavLink
                            to={navItem.path}
                            activeClassName="active"
                        >
                            {navItem.label}
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;