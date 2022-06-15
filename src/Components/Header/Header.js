import React from 'react';
import './Header.css';
import logo from './../../images/Silton .png';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase/useFirebase';
import useAuth from '../../hooks/useAuth/useAuth';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className='bg-light' id='navbar'>
                <img src={logo} alt='' id='logo' />
                <NavLink to='/' className='nav-link-1'>
                    Home
                </NavLink>
                <NavLink to='/shop' className='nav-link-1'>
                    Shop
                </NavLink>

                <NavLink to='/review' className='nav-link-1'>
                    Order Review
                </NavLink>
                <NavLink to='/inventory' className='nav-link-1'>
                    Inventory
                </NavLink>
                <NavLink to='/reviewform' className='nav-link-1'>
                    Make your Opionion
                </NavLink>

                {user.email && (
                    <span className='text-black me-2'>
                        Hello {user.displayName}
                    </span>
                )}

                {user.email ? (
                    <button
                        className='btn btn-success d-inline me-2'
                        onClick={logOut}
                    >
                        Log Out
                    </button>
                ) : (
                    <NavLink to='/login' className='nav-link-1'>
                        Login
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Header;
