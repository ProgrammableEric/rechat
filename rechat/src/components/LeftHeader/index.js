import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import UserAvatar from '../UserAvatar';

export default class LeftHeader extends Component {

    render() {
        return (
            <div className="leftHeader">
                <UserAvatar chatIcon={false}></UserAvatar>
                <span className="myName">Jackson</span>
                
            </div>
        )
    }
}
