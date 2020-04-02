import React, { Component } from 'react';
import './style.css';
import { NONAME } from 'dns';

export default class MainPageLeft {
    constructor(props) {
        super(props);
        this.state = {
            contactedItems: [
                { 
                    username: "Jackson",
                    user_id: 1,
                    message: "我在路上",
                    unread: 2,
                    time: "12:35",
                    avatar: None,
                }, 
                
            ]
        }
    }
}