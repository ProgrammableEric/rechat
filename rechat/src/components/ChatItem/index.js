import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { ReactComponent as Icon } from './girl.svg';
import UserAvatar from '../UserAvatar';

export default class ChatItem extends Component {

    constructor(props) {
        super(props);
        console.log(props)
    }
    
    _parseAvatar = (avatar => {
        const img = `${avatar}.png`;
        return require(`../../assets/profile-icons/${img}`);
    })

    render() {

        const chatHistory = this.props.chatContent;
        return (
            <div className="wrapper">
                {chatHistory.map((obj, idx) => 
                    <div className='single-meg'>
                        <div className='username'>{obj.username}</div>
                        <div className='content'>
                            <UserAvatar 
                                src={this._parseAvatar(obj.avatar)}
                                name={obj.name}
                                size="40" 
                            />
                            {obj.message}
                        </div>
                        <div className='time'>{obj.time}</div>
                    </div>
                )}
            </div>
        )
    }
} 
