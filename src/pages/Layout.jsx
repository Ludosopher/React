import React from 'react';
import { Outlet} from 'react-router-dom';
import CastomLink from '../CastomLink';

const Layout = () => {
    return (
        <>
            <header className='header' style={{background: 'black'}}>
                <div className='menuItem'><CastomLink to={'/'}>Home</CastomLink></div>
                <div className='menuItem'><CastomLink to={'/chats'}>Chats</CastomLink></div>
                <div className='menuItem'><CastomLink to={'/about'}>Gists</CastomLink></div>
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