import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Chats from '../pages/Chats';
import AboutPage from '../pages/AboutPage';
import Layout from '../pages/Layout';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import MessagesContainer from '../pages/MessagesContainer';

function App() {
  
  return (
    
    <Routes>
      <Route path={'/'} element={<LoginPage />}/>
      <Route path={'/register'} element={<RegisterPage />}/>
      <Route path={'/layout'} element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path={'/layout/chats'} element={<Chats />}/>
        <Route path={'/layout/about'} element={<AboutPage />}/>
        <Route path={'/layout/chats/:id/:name'} element={<MessagesContainer />}/>
      </Route>
      <Route path={'/*'} element={<NotFoundPage />}/>
    </Routes>
    
  );
}

export default App;
