import React, { Component } from 'react';
import './style.css';
import { NONAME } from 'dns';
import UserAvatar from '../UserAvatar';
import ListItems from '../ListItems';
import PropTypes from 'prop-types'; 
// PropTypes 用于类型检查
// PropTypes 提供一系列验证器，可用于确保组件接收到的数据类型是有效的
// 出于性能方面的考虑，propTypes 仅在开发模式下进行检查。


class MainPageLeft extends Component {

    clickItemHandle = () => {};

    constructor(props) {
        super(props);
        this.state = {
            contactedItems: [
                { 
                    username: "Jackson",
                    user_id: 1,
                    message: "我在路上",
                    unread: 2,
                    time: "12:35",
                    avatar: "man-2",
                    selected: false, 
                }, 
                { 
                    username: "Declan",
                    user_id: 2,
                    message: "我在路上啊啊啊",
                    unread: 1,
                    time: "10:30",
                    avatar: "man-6",
                    selected: false, 
                }, 
                { 
                    username: "Sue",
                    user_id: 3,
                    message: "Please check my email ",
                    unread: 0,
                    time: "3/29",
                    avatar: "woman-3",
                    selected: true, 
                }, 
            ]
        }
    }

    render() {

        return (
            <div className="mainPageLeftWrapper">
            <ListItems 
                dataList = {this.state.contactedItems}
                isSearching = {false}
                clickItem = {this.clickItemHandle}
            />
    </div>)
    }
}

export default MainPageLeft;