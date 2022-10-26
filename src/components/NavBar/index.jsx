import React from 'react';
import './styles.css';
import CartWidget from '../CartWidget';

const NavBar = () => {
    return (
    <ul className ='contenedor'>
        <p className='logo'>E -<span> com</span> </p>

        <nav className='nav'>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Categorias">Categorias</a></li>
            <li><a href="#Ofertas">Ofertas</a></li>
            <li><a href="#Favoritos">Favoritos</a></li>
        </nav>
        <div className='cart-log'>
            <CartWidget/>
            <button className='btn btn-primary btn-lg '>Login</button>
        </div>
    </ul>

    )
}
export default NavBar;