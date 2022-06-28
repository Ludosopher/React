import React from 'react';
import {Link, useMatch} from 'react-router-dom';

const CastomLink = ({ children, to, ...props }) => {

const match = useMatch(to);

    return (
        <Link className='menuLink' to={to} style={{
            color: match ? 'red' : 'white'
        }} {...props}>
            { children }
        </Link>
    );
}

export default CastomLink;