import React, {useEffect, useState} from 'react';
import { loginInitiate } from '../redax/redusers/userReduser/userReduser';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSelector } from '../redax/redusers/userReduser/userSelector';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/layout');
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password))
    };

    return (
        <div>
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <input value={email} type="textEmailAddress" onChange={(e) => setEmail(e.target.value)}></input>
                <input value={password} type="text" onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit">LOG IN</button>
            </form>
            <h2><a href="http://localhost:3000/register">REGISTRATION</a></h2>
        </div>
    );
};

export default LoginPage;