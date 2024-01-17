import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light align-items-center">
            <Logo />
            <div className="navbar-nav">
                <Button label={'Service'} clickeando={() => console.log('Service')} />
                <Link to='/' className="btn btn-primary custom-btn text-center">Products</Link>
                <Button label={'About Us'} clickeando={() => console.log('About Us')} />
                <Button label={'Languages'} clickeando={() => console.log('Languages')} />
                <Button label={'Book Now'} clickeando={() => console.log('Book Now')} />
            </div>
            <section>
                <Link to='/category/limpieza' className="btn btn-danger">Limpieza</Link>
                <Link to='/category/extras' className="btn btn-danger">Extras</Link>
            </section>
            <CartWidget />
        </nav>
    );
}

export default NavBar;