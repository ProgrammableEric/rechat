import React from 'react';
import './App.css';
import { directive } from '@babel/types';
import SignInSignUp from './components/SignInSignUp';
import SearchBox from './components/SearchBox';
import LogIn from './containers/LogInPage';
import Register from './containers/RegisterPage';
import LeftHeader from './components/LeftHeader';
import ChatItem from './components/ChatItem';
import UserAvatar from './components/UserAvatar';
import ChatWind from './components/chatWindow';

function App() {
  return (
    <div className="wrapper">
      <ChatItem></ChatItem>
    </div>
  );
}

export default App;


