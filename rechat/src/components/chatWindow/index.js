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

    handleChange(event) {
        this.setState({value: event.target.value});
    };

    handleSubmit(event) {
        alert('A message was sent: ' + this.state.value);
        event.preventDefault(); 
    }
    
    render() {
        const {contactName, chatType, chatHistory} = this.props;
        const listChats = chatHistory.map((meg) =>
            <li>{meg}</li>    
        );
        return(
            <div className='chatWind'>
                <div className='chatTitle'>
                    <div className='name'>
                        {contactName}
                    </div>
                </div>
                <div className='chatWin'>
                    <ul className='chatContent'>
                        {listChats}
                    </ul>
                </div>
                <div className='inputText'>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="message" value={this.state.value} onChange={this.handleChange} />
                        <input type="submit" id="sendBtn" value="Send" />
                    </form>
                </div>
            </div>
            
        )
    }

}