import React, { Component } from 'react';
import './style.css';

export default class ChatWind extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contactName: '',
            isLogin: true,
            chatType: '',
            chatHistory: [],
        }
    }

    _clickChatInfo = () => {
        const { showGroupChatInfo, showPersonalInfo, chatType, hasShowed } = this.props;
        if (chatType === 'group') {
          showGroupChatInfo(!hasShowed);
        } else if (chatType === 'private') {
          showPersonalInfo();
        }
    };

    clickToBack = () => {
        this.props.history.push('/');
    };
    
    render() {
        const {contactName, chatType, chatHistory} = this.props;
        return(
            <div className='chatWind'>
                <div className='chatTitle'>
                    <div className='name'>
                        {contactName}
                    </div>
                </div>
                <div className='chatWin'>
                    
                </div>
                <div className='inputText'>

                </div>
            </div>
            
        )
    }

}