import React, { Component } from 'react';
import './style.css';
import ChatItem from '../ChatItem'

class ChatWind extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contactName: 'Declan',
            isLogin: true,
            chatType: 'private',
            chatHistory: [
                {   
                    username: "Jackson",
                    user_id: 1,
                    message: "我在路上",
                    time: "12:35",
                    avatar: "man-2",
                },
                {
                    username: "Declan",
                    user_id: 2,
                    message: "我在路上啊啊啊",
                    time: "12:36",
                    avatar: "man-6",
                },
                {   
                    username: "Jackson",
                    user_id: 1,
                    message: "我在路上lala",
                    time: "12:37",
                    avatar: "man-2",
                },

            ], // what inside this list: {'name': '', 'id': int, 'time': '', 'msg':'', 'logo': link}
        }
        console.log(this.state.chatHistory)
        
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
        const {contactName, chatType, chatHistory} = this.state;
        const st = {position: 'absolute', width: '774px', 'box-sizing':'none', border:'none', 'background-color':'transparent',
            borderradius:'0px', opacity:'100%', 'min-height': '160px'};
        const stBtn = {position: 'absolute', right:'10px'};


        return(
            <div className='chatWind'>
                <div className='chatTitle'>
                    <div className='name'>
                        {contactName}
                    </div>
                </div>
                <div className='chatWin'>
                    <ChatItem chatContent = {chatHistory} user = {contactName}></ChatItem>
                </div>
                <div className='inputText'>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="message" value={this.state.value} onChange={this.handleChange} style={st}/>
                        <input type="submit" id="sendBtn" value="Send" style={stBtn}/>
                    </form>
                </div>
            </div> 
            
        )
    }

}

export default ChatWind;