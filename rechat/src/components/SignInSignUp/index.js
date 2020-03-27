import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { directive } from '@babel/types';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import line1 from './Line.png';
import line2 from './Line2.png';

export default class SignInSignUp extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            password2: '',
        }
    }

    handleChange = event => {
        // object destructuring: is a special syntax that allows us to “unpack” arrays or 
        // objects into a bunch of variables, as sometimes they are more convenient.
        // https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
        const { target } = event;
        this.setState({ [target.name]: target.value });
    };

    render() {
        const { isLogin } = this.props;
        const { name, password, password2 } = this.state;
        const buttonName = isLogin ? "Log In" : "Sign Up";
        
        return (
            <div className="formContent">
                <div className="green"></div>
                
                <img src={line1} id="line1"></img>
                <img src={line2} id="line2"></img>
                 
                {/* 此处有margin collapse 问题 - 
                两个或多个毗邻的普通流中的块元素垂直方向上的 margin 会折叠
                解决:  生成 BFC 的元素不会和在流中的子元素发生空白边折叠。
                触发block formatting context即可，触发的方法：
                    1.   float不为none
                    2.   overflow不为visible
                    3.   display设为‘table-cell’, ‘table-caption’, 或‘inline-block’
                    4.   position既不是static也不是relative
                */}
                <div className="container">
                    <div className="rechatLogo">
                        <img src={logo} alt="rechat logo"></img>
                    </div>
                    <div className="center">
                        <input 
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            placeholder="Enter user name"
                        />
                    </div>
                    <div className="center">
                        <input 
                            type="password"
                            name="password"
                            value={ password }
                            onChange={ this.handleChange }
                            placeholder="Enter password"
                        />
                    </div>
                    {!isLogin && <div className="center">
                        <input 
                            type="password"
                            name="password2"
                            value={ password2 }
                            onChange={ this.handleChange }
                            placeholder="Repeat password"
                        />
                    </div>}
                    <div className="center">
                        {/* input (submit) button is better for taking user input as HTML forms. */}
                        <input type="button" onClick={this.handleChange} value={buttonName} />
                    </div>
                    { isLogin && <div className="center">
                        <div className="side">
                            <a href="">
                                <span className="signUp">Sign up</span>
                            </a>
                            <span>     |     </span>
                            <a href="">
                                <span className="forget">Forgot password</span>
                            </a>
                        </div> 
                    </div>}
                </div>
                
            </div>
        
        )   
    }

}