import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { ReactComponent as Icon } from './man-6.svg'; 

export default class UserAvatar extends Component {

    constructor(props) {
        super(props);
    }

    clickAvatar = () => {
        // Todo: click Avatar to show user profile. 
    }; 

    render() {

        const { chatIcon } = this.props; 
        // 区分图标尺寸，true if 为聊天界面图标，false 则为聊天列表图标

        return (
            <div className={chatIcon ? 'userAvatarChat' : 'userAvatar'}
                onClick={this.clickAvatar}
            >
                <a href="">
                    <Icon className="icon"></Icon>
                </a>
            </div>
        )
    }
}

UserAvatar.propTypes = {
    chatIcon: PropTypes.bool,
}


UserAvatar.defaultProps = {
    chatIcon: false, 
}