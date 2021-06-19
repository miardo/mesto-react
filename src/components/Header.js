import React from 'react';
import logo from '../images/logo_header.svg';

function Header() {
    return (
    <header className="header">
        <a className="header__logo-link" href="/" target="_blank">
            <img src={logo} alt="Место Россиия" className="header__logo" />
        </a>
    </header>
    );
}

export default Header