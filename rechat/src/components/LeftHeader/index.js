import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import UserAvatar from '../UserAvatar';

export default class LeftHeader extends Component {

    _parseAvatar = (avatar => {
        const img = `${avatar}.png`;
        return require(`../../assets/profile-icons/${img}`);
    })

    render() {
        return (
            <div className="leftHeader">
                <UserAvatar 
                    src={this._parseAvatar('man-1')}
                    name='me'
                    size="55"
                    type="myAvatar"
                />
                <span className="myName">Eric</span>
            </div>
        )
    }
}
