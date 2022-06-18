import React, { useState } from 'react';
import {Link, Outlet, NavLink} from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const BlogPage = () => {

    const [chatList, setChatList] = useState([
        {id: 1, name: "Рабочий"},
        {id: 2, name: "Друзья"},
        {id: 3, name: "Семья"},
        {id: 4, name: "СМИ"},
      ]);

    return (
        <div id="chats">
          <h3>Чаты</h3>
          <List component="nav" aria-label="secondary mailbox folder">
                {chatList.map((chat) => (
                    <Link className='chatLink' key={chat.id} to={`/blog/${chat.id}/${chat.name}`}>
                        <div className='chatName'>
                            {chat.name}
                        </div>
                    </Link>
                ))}
          </List>
            
        </div>
    );
}

export default BlogPage;