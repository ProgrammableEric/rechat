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
<<<<<<< HEAD
import ChatWind from './components/chatWindow';
=======
import PrivateChat from './components/PrivateChat';
>>>>>>> 67ede3b77cce70cb607c48e3f8d247e8496f8b19
// import ListItem from './components/ListItem'; 


function App() {

  const sex = 'man';
  const iconIdenx = '2';
  const src = `${sex}-${iconIdenx}.png`;

  return (
<<<<<<< HEAD
    
    <ChatWind></ChatWind>
=======
    <div className='wrapper'>
      <PrivateChat />
    </div>
>>>>>>> 67ede3b77cce70cb607c48e3f8d247e8496f8b19
  );
}

export default App;


// 要修改：1. icon 左边距
//        2. chatlist 切换效果
//        3. search 效果
//        4. leftheader 太空，加东西
//        5. signinsignup 的背景




