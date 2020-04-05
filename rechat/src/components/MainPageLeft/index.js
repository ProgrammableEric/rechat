import React, { Component } from 'react';
import './style.css';
import UserAvatar from '../UserAvatar';
import ListItems from '../ListItems';
import LeftHeader from '../LeftHeader';
import SearchBox from '../SearchBox';
import PropTypes from 'prop-types'; 
import { ReactComponent as Chat } from './chat2.svg';
import { ReactComponent as Setting } from './gear.svg';
import { ReactComponent as Contact } from './user.svg';
import { ReactComponent as Note} from './list.svg';


// PropTypes 用于类型检查
// PropTypes 提供一系列验证器，可用于确保组件接收到的数据类型是有效的
// 出于性能方面的考虑，propTypes 仅在开发模式下进行检查。


class MainPageLeft extends Component {

    clickItemHandle = () => {};

    constructor(props) {
        super(props);
        this.state = {
            isSearching: false,
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
                    unread: 157,
                    time: "10:30",
                    avatar: "man-6",
                    selected: false, 
                }, 
                { 
                    username: "Sue",
                    user_id: 3,
                    message: "",
                    unread: 0,
                    time: "3/29",
                    avatar: "woman-3",
                    selected: true, 
                }, 
                { 
                    username: "Jenny",
                    user_id: 4,
                    message: "omg look at this !",
                    unread: 15,
                    time: "3/21",
                    avatar: "woman-5",
                    selected: false, 
                },
                { 
                    username: "Ella",
                    user_id: 4,
                    message: "This is a long message ... This is a long message ...This is a long message ...This is a long message ...This is a long message ...",
                    unread: 7,
                    time: "3/20",
                    avatar: "woman-1",
                    selected: false, 
                },
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
                    unread: 157,
                    time: "10:30",
                    avatar: "man-6",
                    selected: false, 
                }, 
                { 
                    username: "Sue",
                    user_id: 3,
                    message: "",
                    unread: 0,
                    time: "3/29",
                    avatar: "woman-3",
                    selected: true, 
                }, 
                { 
                    username: "Jenny",
                    user_id: 4,
                    message: "omg look at this !",
                    unread: 15,
                    time: "3/21",
                    avatar: "woman-5",
                    selected: false, 
                },
                { 
                    username: "Ella",
                    user_id: 4,
                    message: "This is a long message ... This is a long message ...This is a long message ...This is a long message ...This is a long message ...",
                    unread: 7,
                    time: "3/20",
                    avatar: "woman-1",
                    selected: false, 
                },
            ]
        }
    }

    render() {

        const {isSearching, contactedItems} = this.state;
        // contactedItems.sort((a,b) => b.time - a.time); 
        
        
        return (
            <div className="mainPageLeftWrapper">
                <LeftHeader />
                <SearchBox />
                <div className="icons">
                    <div className='chatWrapper'>
                        <Chat className='chatIcon'/>
                    </div>
                    <div className='contactWrapper'>
                        <Contact className='contactIcon'/>
                    </div>
                    <div className='noteWrapper'>
                        <Note className='noteIcon'/>
                    </div>
                </div>
                <ListItems 
                    dataList = {this.state.contactedItems}
                    isSearching = {this.state.isSearching}
                    clickItem = {this.clickItemHandle}
                />
                <div className='settingWrapper'>
                    <Setting className='settingIcon'/>
                </div>
    </div>)
    }
}

export default MainPageLeft;