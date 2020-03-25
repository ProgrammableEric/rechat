import React, { Component } from 'react';
import './';
import Modal from '../../components/Modal';
import SignInSignUp from '../../components/SignInSignUp';

export default class Register extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            password: '',
            modal: {
                visible: false,
            }
        } 
        
    }

    render() {
        const { visible } = this.state.modal;
        
        return (
            <div className="outer">
                <SignInSignUp isLogIn={false}></SignInSignUp>
            </div>
        )
    }
}