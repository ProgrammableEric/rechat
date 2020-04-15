import React, { Component } from 'react';
import './style.css';
import MainPageLeft from '../../components/MainPageLeft';

export default class PrivateChat extends Component {


    render() {
        return (
            <div className="backgroundOverlay">
            <div className="privateChatWrapper">
                <MainPageLeft className="pageLeft"/>
            </div>
            </div>
        ) 
    }
}


/*
Next (Eric): 
1. 鼠标拖动可变宽度
2. 键盘上下控制chatitemlist 切换
3. setting 点击界面
4. profile 点击界面

*/