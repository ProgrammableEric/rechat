import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { ReactComponent as Icon } from './girl.svg';

export default class ChatItem extends Component {

<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state = {
            highLight: false,
            
        }
=======
    textDisp(){
        
>>>>>>> fc6de054143675f2448ac1a7faf759117c00576d
    }

    renderAlertNew (alertNew) {
        if (alertNew == 0) {
            return;
        } else if (alertNew < 10) {
            return (
                <div className="alertNew">
                    {alertNew}
                </div>
            )
        } else {
            return (
                <div className="alertNew">
                    ...
                </div>
            )
        }
    }
    
    render() {
<<<<<<< HEAD

        const {name, time, msg, alertNew} = this.props;
=======
        const { id, img, time, name, msg, clickAvatar} = this.props;
>>>>>>> fc6de054143675f2448ac1a7faf759117c00576d
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


ChatItem.propTypes = {
    name: PropTypes.string,
    time: PropTypes.string,
    msg: PropTypes.string,
    alertNew: PropTypes.number
  };
  
ChatItem.defaultProps = {
    name: "Jackson",
    time: "12:25",
    msg: "在干嘛啊？？",
    alertNew: 2,
};