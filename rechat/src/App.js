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
import MainPageLeft from './components/MainPageLeft';
import ChatWind from './components/chatWindow';
// import ListItem from './components/ListItem'; 


function App() {

  const sex = 'man';
  const iconIdenx = '2';
  const src = `${sex}-${iconIdenx}.png`;

  return (
    
    <ChatWind></ChatWind>
  );
}

export default App;


