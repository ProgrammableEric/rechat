import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { ReactComponent as Icon } from './girl.svg';

export default class ChatItem extends Component {

    textDisp(){
    
    }
    
    render() {

        const { id, img, time, name, msg, clickAvatar} = this.props;

        return (
            <div className="wrapper">
                <div className='chat-item'>
                    <img name={name} src={img} width='40px' height='40px'/>
                    <span>{name}</span>
                    <span>{time}</span>
                    <div className='message'>this.textDisp(msg)</div>
                </div>
            </div>
        )
    }
} 
