import React from 'react';
import {Link, Outlet, NavLink} from 'react-router-dom';
import CastomLink from './CastomLink';

const setActive = ({isActive}) => isActive ? 'active' : 'passive';

const Layout = () => {
    return (
        <>
            <header className='header' style={{background: 'black'}}>
                <div className='menuItem'><CastomLink to={'/'}>Home</CastomLink></div>
                <div className='menuItem'><CastomLink to={'/blog'}>Chats</CastomLink></div>
                <div className='menuItem'><CastomLink to={'/about'}>Profile</CastomLink></div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                
            </footer>
        </>
    );
}

export default Layout;