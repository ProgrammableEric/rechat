import React, { Component } from 'react';
import './style.css';
import UserAvatar from '../UserAvatar';
import PropTypes from 'prop-types';

class ListItems extends Component {

    constructor(props) {
        super(props);
    }

    _parseAvatar = (avatar => {
        const img = `${avatar}.png`;
        return require(`../../assets/profile-icons/${img}`);
    })

    render() {

        const { dataList, isSearching, clickItem } = this.props;
        const   listItems = dataList && 
            dataList.map((data, index) => {
                let message = data.message;
                // Todo: shareURL functionality ...
                // Todo: Groupchat functionality ... 
                
                let unreadDot;   // red dot to display number of unread messages. 
                // For the use of && in if statement, check 
                // https://stackoverflow.com/questions/9319915/what-does-shorthand-index-0-count-do
                // compare a && b, a || b, JS returns the last executed operand. 
                // Also,  If a value evaluates to false, 0, NaN, "", null, or undefined, it is falsey; all other values are truthy.
                switch(data.unread && data.unread.toString().length) {
                    case 2: 
                        unreadDot = 'twoDigitsUnread';
                        break;
                    case 3: 
                        unreadDot = 'threeDigitsUnread';
                        break;
                    default: 
                        unreadDot = 'oneDigitsUnread';
                }   

                return (
                    <li key={index}
                        style={
                            data.selected ? {backgroundColor: '#D8D8D8'} : {backgroundColor: '#585050'}
                    }>
                        <UserAvatar 
                            src={this._parseAvatar(data.avatar)}
                            name={data.name}
                            size="40" 
                        />
                        <div className="content">
                            <div className="title">
                                <p className="name">{data.username}</p>
                                <span className="time">{data.time}</span>
                            </div>
                            <div className="message">
                                <span className="text">{message || 'no message.'}</span>
                                { data.unread && <span className={unreadDot}>{data.unread>99 ? '99+' : data.unread}</span> }
                            </div>
                        </div>
                    </li>
                );   
            });
        
        return (
            <ul className="homePageList">
                {listItems}
            </ul>
        ); 
    }
}

export default ListItems;

ListItems.propTypes = {
    dataList: PropTypes.array,
    isSearching: PropTypes.bool,
    clickItem: PropTypes.func,
}

ListItems.defaultProps = {
    dataList: [],
    isSearching: false,
    clickItem() {},
}