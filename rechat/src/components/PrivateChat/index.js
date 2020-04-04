import React, { Component } from 'react';
import './style.css';
import MainPageLeft from '../../components/MainPageLeft';

export default class PrivateChat extends Component {


    render() {
        return (
            <div className="privateChatWrapper">
                <MainPageLeft className="pageLeft"/>
            </div>
        ) 
    }
}
