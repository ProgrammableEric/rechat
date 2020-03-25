import React, { Component } from 'react';
import './style.css';

export default class Background extends Component {

    render() {
        // class and className: Class is an attribute in an html element, wheras .className
        // is a property that can by called on an element to get/set its class.
        return (<div className="background"></div>); 
    }

}