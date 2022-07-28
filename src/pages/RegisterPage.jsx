import React, {useEffect, useState} from 'react';
import { registerInitiate } from '../redax/redusers/userReduser/userReduser';
import { userSelector } from '../redax/redusers/userReduser/userSelector';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return;
        }
        dispatch(registerInitiate(email, password, displayName))
    };

    return (
        <div>
            <h2>REGISTER</h2>
            <form onSubmit={handleSubmit}>
                <label>Enter name: </label>
                <input value={displayName} type="text" onChange={(e) => setDisplayName(e.target.value)}></input>
                <br></br><label>Enter email: </label>
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)}></input>
                <br></br><label>Enter password: </label>
                <input value={password} type="text" onChange={(e) => setPassword(e.target.value)}></input>
                <br></br><label>Enter confirm password: </label>
                <input value={confirmPassword} type="text" onChange={(e) => setConfirmPassword(e.target.value)}></input>
                <br></br><button type="submit">SIGN IN</button>
            </form>
        </div>
    );
};

export default RegisterPage;