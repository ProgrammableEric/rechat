import React, { Component } from 'react';
import './style.css';

class chatTitle extends React.Component {
    render() {
        return (
            <div style={{backgroundColor:"B2C098",position:"absolute",left:"50%-translateX(50%)",top:"50%-translateY(50%)"}}>
                {this.props.name}
            </div>
        );
    }
}

// ReactDOM.render(
//     <chatTitle name=""/>,
//     document.getElementById('hello-example')
// );