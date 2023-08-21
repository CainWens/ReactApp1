import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import ChatsPage from './pages/Chat'
import ProfilePage from './pages/Profile'
import HomePage from './pages/Home'
import Page404 from './pages/404'
import Menu from './Menu'
import Chat from './components/Message'
import Toggler from "./toggler"


import './App.scss';

function App() {

  const ROBOT_MES = 'Привет. Скоро с вами свяжется оператор'

  return (
    <div className="App-header">
      <div className="App">
        <>
          <Menu />
        </>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/profile' element={<ProfilePage name={"Alex"} />} />
            <Route path='chats' element={<ChatsPage />}>
              <Route path=':chatId' element={<Chat />} />
            </Route>
            <Route path='*' element={<Page404 />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
