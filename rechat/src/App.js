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
// import ListItem from './components/ListItem'; 



function App() {

  const src = './assets/profile-icons/man-2.png';

  return (
    <div className="wrapper">
      <img src={src}></img>
      <UserAvatar src={src} size='40' ></UserAvatar>
    </div>
  );
}

export default App;


