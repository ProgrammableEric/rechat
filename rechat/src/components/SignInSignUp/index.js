import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { directive } from '@babel/types';
import { Link } from 'react-router-dom';

export default class SignInSignUp extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
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
        const { name, password } = this.state;
        
        return (
            <div className="formContent">
                <div className="rechatLogo">
                    <img src="../../../img/logo.png"></img>
                </div>
                <div className="center">
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        placeholder="Username"
                    />
                </div>
                <div className="center">
                    <input 
                        type="password"
                        name="password"
                        value={ password }
                        onChange={ this.handleChange }
                        placeholder="Password"
                    />
                </div>
                <div className="center">
                    {/* input (submit) button is better for taking user input as HTML forms. */}
                    <input type="button" onClick={this.handleChange} value="Log In" />
                </div>
                <div className="side">
                    <a href="">
                        <span className="signUp">Sign up</span>
                    </a>
                    <a href="">
                        <span className="forget">Forgot password</span>
                    </a>
                </div> 
            </div>
        
        )   
    }

}