import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Chats from '../pages/Chats';
import AboutPage from '../pages/AboutPage';
import Layout from '../pages/Layout';
import NotFoundPage from '../pages/NotFoundPage';
import MessagesContainer from '../pages/MessagesContainer';

function App() {

  
  return (
    
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path={'/chats'} element={<Chats />}/>
        <Route path={'/about'} element={<AboutPage />}/>
        <Route path={'/chats/:id/:name'} element={<MessagesContainer />}/>
      </Route>
      <Route path={'/*'} element={<NotFoundPage />}/>
    </Routes>
    
  );
}

export default App;
