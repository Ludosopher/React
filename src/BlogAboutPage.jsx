import React, {useState, useEffect} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useParams} from 'react-router-dom';

const BlogAboutPage = () => {
    const [messageList, setmessageList] = useState([
        {id: 1, text: "Некий текст Ивана", author: "Иван"},
        {id: 2, text: "Некий текст Петра", author: "Пётр"},
    ]);
    const [newAuthor, setNewAuthor] = useState('');
    const [newText, setNewText] = useState('');
    const [answer, setAnswer] = useState('');
    const { name } = useParams();

    function handleChange1(event) {
        setNewAuthor(event.target.value);
    }
    function handleChange2(event) {
        setNewText(event.target.value);
    }
    function handleClick() {
        let newObject = {
        id: messageList.length + 1,
        text: newText,
        author: newAuthor
        };
        let newArray = [...messageList, newObject];
        setmessageList(newArray);
    }

    useEffect(() => {
        if (newAuthor != "") {
        setAnswer(newAuthor + " написал новое сообщение!");
        } else {
        setAnswer("Пока никто не написал новое сообщение!");
        }
    }, [messageList]);

    return (
        <div className='chat'>
            <h3>{name}</h3>
            <div id="input_name">
            <TextField id="outlined-basic" label="Укажите своё имя:" variant="outlined" onChange={handleChange1} autoFocus/>
            </div>
            <br/>
            <div id="input_message">
              <TextField fullWidth label="Введите текст сообщения:" id="fullWidth" onChange={handleChange2}/>
            </div>
            <br/>
            <Button onClick={handleClick} variant="outlined">Отправить</Button>
            <br/><br/>
            {messageList.map((message) => (
              <div key = {message.id}><span id="author">{message.author}</span>: {message.text}</div>
            ))}
            <br/>
            <div id="answer">{answer}</div>
        </div>
    );
}

export default BlogAboutPage;