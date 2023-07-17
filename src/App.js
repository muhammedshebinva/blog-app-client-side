
import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';

import {Route, Routes} from 'react-router-dom'

import IndexPage from './components/pages/IndexPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './components/pages/CreatePost';
import PostPage from './components/pages/PostPage';
function App() {
  return (
    <UserContextProvider>
    <Routes> 
      <Route path='/' element={<Layout/>}>
     <Route index element={<IndexPage/>} />
      <Route path={'/login'} element={<LoginPage/>}/>
     <Route path='/register' element={<RegisterPage/>}/>
     <Route path='/create' element={<CreatePost/>} />
     <Route path='/post/:id' element={<PostPage/>} />
     </Route>
  </Routes>
    </UserContextProvider>
  

   
  );
}

export default App;
