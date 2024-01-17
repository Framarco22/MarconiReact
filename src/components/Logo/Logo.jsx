import React from 'react';
import logo from '../Logo/assets/logo.png';

const Logo = () => {
    return (
        <div className="navbar-brand">
            <img src={logo} alt="Logo" className="img-fluid" />
        </div>
    );
};

export default Logo;