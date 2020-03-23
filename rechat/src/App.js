import React from 'react';
import logo from './logo.svg';
import './App.css';
import { directive } from '@babel/types';
import Background from './components/Background';
import SignInSignUp from './components/SignInSignUp';

function App() {
  return (
    <div className="outer">
      <Background></Background>
      <SignInSignUp></SignInSignUp>
    </div>
  );
}

export default App;
