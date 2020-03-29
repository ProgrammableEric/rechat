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

function App() {
  return (
    <div className="wrapper">
      <UserAvatar chatIcon={false} ></UserAvatar>
    </div>
  );
}

export default App;


