import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { getMessages } from '../redax/redusers/messagesReduser/messagesSelector';

const Messages = () => {
  const { id, name } = useParams();  
  const messages = useSelector(getMessages);
    const chatMessages = messages.filter((message) => {
      if (!id) return null;
      return Number(id) === message.chatId;
    });
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const deleteMessage = (id) => {
        const cancel = () => dispatch({type: 'DELETE_MESSAGE', payload: id, meta:{delay: 3000} });
        cancel();
    }
    const addMessage = () => {
        const obj = {
            id: Math.random(),
            text: text,
            author: author
        }
        dispatch({type: 'ADD_MESSAGE', payload: obj }); 
    }
    const handleChangeAuthor = (e) => {
        setAuthor(e.target.value);
    }
    const handleChangeText = (e) => {
        setText(e.target.value);
    }

  return (
    
    <div>
      <h3>{name}</h3>
      <div>
        Введите автора:
        <input value={author} onChange={handleChangeAuthor} type="text" />
      </div>
      <div>
        Введите сообщение:
        <input value={text} onChange={handleChangeText} type="text" />
      </div>
      <button onClick={addMessage}>Добавить сообщение</button>
      {chatMessages.map((message) => (
        <div key = {message.id}>
            <b>{message.author}</b>: {message.text}
            <button onClick={() => deleteMessage(message.id)}>x</button>
        </div>

      ))}
    </div>
    
  );
}

export default Messages;