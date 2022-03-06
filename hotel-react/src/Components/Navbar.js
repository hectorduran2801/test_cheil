import React from 'react';
import '../App.css';

const Navbar = ({brand}) => {
    return (
        <nav className='d-flex navbar navbar-dark bg-dark'>
            <div className='container'>
                <a href='#' className='navbar-brand'>{brand}</a>
            </div>
        </nav>
    );
}

export default Navbar;