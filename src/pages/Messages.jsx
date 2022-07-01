
const Messages = ({name, author, text, handleChangeAuthor, handleChangeText, addMessage, deleteMessage, chatMessages}) => {
  

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