import React from 'react';
import Messages from './Messages';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { getMessages } from '../redax/redusers/messagesReduser/messagesSelector';

const MessagesContainer = () => {
    
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
            chatId: Number(id),
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
            <Messages name={name} author={author} text={text} handleChangeAuthor={handleChangeAuthor} handleChangeText={handleChangeText} addMessage={addMessage} deleteMessage={deleteMessage} chatMessages={chatMessages} />
        </div>

    );
}

export default MessagesContainer;