import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { logoutInitiate } from '../redax/redusers/userReduser/userReduser';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        dispatch(logoutInitiate());
        navigate('/');
    }
        
    return (
        <div>
            Home
            <button onClick={logout}>EXIT</button>
        </div>

    );
}

export default HomePage;