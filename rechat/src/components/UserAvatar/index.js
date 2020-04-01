import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
// import { ReactComponent as Icon } from './man-6.svg'; 


const defaultColors = [
    '#2ecc71', // emerald
    '#3498db', // peter river
    '#8e44ad', // wisteria
    '#e67e22', // carrot
    '#e74c3c', // alizarin
    '#1abc9c', // turquoise
    '#2c3e50', // midnight blue
];

// decide background logo color based on length of user name. 
// other ways to do it ??? 
function sumChars(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i += 1) {
        sum += str.charCodeAt(i);
    }

    return sum;
}


// use this kind of export when there's no need for constructor/class state. 
export default function UserAvatar(props){

    const {
        src, 
        name, 
        size, 
        clickAvatar, 
        color, 
        colors = defaultColors,
    } = props;

    const imgStyle = {
        width: `${size}px`,
        height: `${size}px`,
    }

    const innerStyle = {
        textAlign: 'center',
        width: `${size}px`,
        height: `${size}px`,
        lineHeight: `${size}px`,
        color: 'white',
        display: 'inline-block',
    }

    let inner;

    // if profile picture given, then render icon as profile pic, otherwise as logo with first 
    // character of the user's name. 
    if (src) {
        inner = <img style={imgStyle} src={src} alt={name}></img>
    } else {
        let background;
        if (color) { // color selected
            background = color;
        } else { // randomly pick a color 
            const i = sumChars(name) % color.length;
            background = colors[i];
        }
        innerStyle.backgroundColor = background;
        
        inner = <span>{name.charAt(0)}</span>
    }

    return (
        <div className='userAvatar' style={innerStyle} onClick={clickAvatar}>
            {inner}
        </div>
    )
        // 区分图标尺寸，true if 为聊天界面图标，false 则为聊天列表图
}

UserAvatar.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.string,
    clickAvatar: PropTypes.func,
    color: PropTypes.string,
    colors: PropTypes.array,
}


UserAvatar.defaultProps = {
    src: undefined,
    name: '?',
    size: '40',
    clickAvatar: undefined,
    color: undefined,
    colors: defaultColors,
}