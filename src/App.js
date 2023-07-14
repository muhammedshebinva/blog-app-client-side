
import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';

import {Route, Routes} from 'react-router-dom'

import IndexPage from './components/pages/IndexPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
function App() {
  return (
  <Routes> 
  <Route path='/' element={<Layout/>}>
  <Route index element={<IndexPage/>} />
  <Route path={'/login'} element={<LoginPage/>}/>
  <Route path='/register' element={<RegisterPage/>}/>
  </Route>
  </Routes>

   
  );
}

export default App;
