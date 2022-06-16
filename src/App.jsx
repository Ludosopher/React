import './App.css';
import React, {useState, useEffect} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const useStyles = makeStyles({
  text: {
    fontSize: 22,
    color: 'green'
  }
});


function App() {

  const styles = useStyles(); // className={styles.text}

  const [newAuthor, setNewAuthor] = useState('');
  const [newText, setNewText] = useState('');
  const [messageList, setmessageList] = useState([
    {id: 1, text: "Некий текст Ивана", author: "Иван"},
    {id: 2, text: "Некий текст Петра", author: "Пётр"},
  ]);
  const [chatList, setChatList] = useState([
    {id: 1, name: "Рабочий"},
    {id: 2, name: "Друзья"},
    {id: 3, name: "Семья"},
    {id: 4, name: "СМИ"},
  ]);
  const [answer, setAnswer] = useState(''); 

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
    <div>
      <br/>
      <div id="container">
        <div id="chuts">
          <h3>Чаты</h3>
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="secondary mailbox folder">
              {chatList.map((chat) => (
                <ListItemButton
                  key = {chat.id}
                  // selected={selectedIndex === 2}
                  // onClick={(event) => handleListItemClick(event, 2)}
                >
                  <ListItemText primary={chat.name} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </div>
        <div>
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
      </div>
      
    </div>
  );
}

export default App;
