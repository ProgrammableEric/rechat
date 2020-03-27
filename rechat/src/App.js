import React from 'react';
import './App.css';
import { directive } from '@babel/types';
import SignInSignUp from './components/SignInSignUp';
import SearchBox from './components/SearchBox';
import LogIn from './containers/LogInPage';
import Register from './containers/RegisterPage';

function App() {
  return (
    <div className="wrapper">
      <SearchBox></SearchBox>
    </div>
  );
}

export default App;


