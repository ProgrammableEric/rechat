import React from 'react';
import './App.css';
import { directive } from '@babel/types';
import Background from './components/Background';
import SignInSignUp from './components/SignInSignUp';

function App() {
  return (
    <div className="outer">
      <SignInSignUp></SignInSignUp>
    </div>
  );
}

export default App;
