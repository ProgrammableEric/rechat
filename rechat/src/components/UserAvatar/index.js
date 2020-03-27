import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { ReactComponent as Icon } from './man-6.svg'; 

export default class UserAvatar extends Component {
    
    render() {
        return (
            <div className="userAvatar">
                <a href="">
                    <Icon className="icon"></Icon>
                </a>
                <span className="userName">艾里克</span>
            </div>
        )
    }
}


