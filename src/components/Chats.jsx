import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChats } from '../redax/redusers/chatsReduser/chatsSelector';

const Chats = () => {
    const chats = useSelector(getChats);
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const deleteCustomer = (id) => {
        dispatch({type: 'DELETE_CHAT', payload: id });
    }
    const addCustomer = () => {
        const obj = {
            id: Math.random(),
            name: name
        }
        dispatch({type: 'ADD_CHAT', payload: obj }); 
    }
    const handleChange = (e) => {
        setName(e.target.value);
    }

  return (
    
    <div>
      <h3>Чаты</h3>

      <input value={name} onChange={handleChange} type="text" />
      <button onClick={addCustomer}>Добавить чат</button>
      {chats.map((chat) => (
        <div key = {chat.id}>
            <b>{chat.name}</b>
            <button onClick={() => deleteCustomer(chat.id)}>x</button>
        </div>

      ))}
    </div>
    
  );
}

export default Chats;