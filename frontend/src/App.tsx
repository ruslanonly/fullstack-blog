import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.scss";

import Navbar from './components/Navbar/Navbar';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import UserPage from './pages/UserPage/UserPage';
import UsersPage from './pages/UsersPage/UsersPage';

function App() {
  return (
    <main className='app'>
      <div className="container">
        <div className="content-wrapper">
          <Navbar/>
          <Routes>
            <Route path='/user/:id' element={<UserPage />}/>
            <Route path='/users' element={<UsersPage />}/>
            <Route path='/post/:id' element={<h1>Post Page</h1>}/>
            <Route path='/posts' element={<h1>Posts Page</h1>}/>
            <Route path='/' element={<HomePage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
            
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default App;
