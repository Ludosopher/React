import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            Page is not found 404
            <br/>
            <Link to='/'>Go to Home</Link>
        </div>

    );
}

export default NotFoundPage;