import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.scss";

import Navbar from './components/Navbar/Navbar';

import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';

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
            <Route path='/' element={<h1>Home Page</h1>}/>
            <Route path='*' element={<h1>Invalid URL. There is no page for that HTTP query</h1>}/>
          </Routes>
        </div>
      </div>
    </main>
    
  );
}

export default App;
