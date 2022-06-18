import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import AboutPage from './AboutPage';
import Layout from './Layout';
import NotFoundPage from './NotFoundPage';
import BlogAboutPage from './BlogAboutPage';


function App() {

  return (
    
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path={'/blog'} element={<BlogPage />}/>
        <Route path={'/about'} element={<AboutPage />}/>
        <Route path={'/blog/:id/:name'} element={<BlogAboutPage />}/>
      </Route>
      <Route path={'/*'} element={<NotFoundPage />}/>
    </Routes>
    
  );
}

export default App;
