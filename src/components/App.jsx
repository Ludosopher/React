import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import Chats from './Chats';
import AboutPage from './AboutPage';
import Layout from './Layout';
import NotFoundPage from './NotFoundPage';
import Messages from './Messages';

function App() {

  
  return (
    
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path={'/chats'} element={<Chats />}/>
        <Route path={'/about'} element={<AboutPage />}/>
        <Route path={'/chats/:id/:name'} element={<Messages />}/>
      </Route>
      <Route path={'/*'} element={<NotFoundPage />}/>
    </Routes>
    
  );
}

export default App;
