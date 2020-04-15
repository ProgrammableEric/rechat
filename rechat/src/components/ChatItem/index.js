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
        console.log(chatHistory);
        return (
            <div className="wrapper">
                {chatHistory.map((obj, idx) => 
                    <div className='single-meg'>
                        {obj.username==this.props.user ? (
                                <div className='mywrap-content'>
                                    <div className='mycontent'>
                                        <div className='mydetails'>{'Me'}<span>  </span>{obj.time}</div>
                                        <div className='mymeg'>{obj.message}</div>
                                    </div>
                                    <div className='mylogo'>
                                        <UserAvatar 
                                            src={this._parseAvatar(obj.avatar)}
                                            name={obj.username}
                                            size="40" 
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className='wrap-content'>
                                    <div className='logo'>
                                        <UserAvatar 
                                            src={this._parseAvatar(obj.avatar)}
                                            name={obj.name}
                                            size="40" 
                                        />
                                    </div>
                                    <div className='content'>
                                        <div className='userdetails'>{obj.username}<span>  </span>{obj.time}</div>
                                        <div className='meg'>{obj.message}</div>
                                    </div>
                                </div>
                            )

                        }
                        
                    </div>
                )}
            </div>
        )
    }
} 
