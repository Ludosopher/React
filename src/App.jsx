import './App.css';
import React, {useState, useEffect} from "react";

function App() {
  
  const [newAuthor, setNewAuthor] = useState('');
  const [newText, setNewText] = useState('');
  const [messageList, setmessageList] = useState([
    {id: 1, text: "Некий текст Ивана", author: "Иван"},
    {id: 2, text: "Некий текст Петра", author: "Пётр"},
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
      <div>Укажите своё имя:</div>
      <input type = "text" onChange={handleChange1}/>
      <div>Введите текст сообщения:</div>
      <input type = "text" onChange={handleChange2}/>
      <button onClick={handleClick}>Отправить</button>
      <br/>
      {messageList.map((message) => (
        <div key = {message.id}><span id="author">{message.author}</span>: {message.text}</div>
      ))}
      <br/>
      <div id="answer">{answer}</div>
    </div>
  );
}

export default App;
