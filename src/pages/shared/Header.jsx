import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='text-center my-3'>
                <NavLink to='/'>Home</NavLink>
                <NavLink className="mr-6 ml-6" to='/addCoffee'>AddCoffee</NavLink>
                <NavLink to='/updateCoffee'>UpdateCoffee</NavLink>
            </div>
        </div>
    );
};

export default Header;