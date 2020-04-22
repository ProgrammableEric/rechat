import React, { Component } from 'react';
import './style.css';
import MainPageLeft from '../../components/MainPageLeft';
import ChatWind from '../ChatWindow';


export default class PrivateChat extends Component {
    

    render() {
        return (
            <div className="backgroundOverlay">
                <div className="privateChatWrapper" id="box">
                    <MainPageLeft id="left"/>
                    <div id="line"></div>
                    <ChatWind id="right"/>
                </div>
                
            </div>
        ) 
    }

    componentDidMount(){ 
            var line = document.getElementById("line");
            var left = document.querySelector("#left"); // return null
            var right = document.querySelector("#right"); // return null
            var box = document.getElementById("box");
            console.log("here is: "+ right)
            line.onmousedown = function(e) {
                var startX = e.clientX;
                line.left = line.offsetLeft;
                this.onmousemove = function (e) {
                    var endX = e.clientX;
                    var movement = line.left + (endX - startX);
                    var maxMov = box.clientWidth -line.offsetWidth;
                    // add max and min widths for left part here

                    line.style.left = movement;
                    // left.style.setProperty("width", movement + "px"); 
                    // right.style.setProperty("width", (box.clientWidth - movement - 2 ) + "px");
                    left.style.width = movement + "px";
                    right.style.width = box.clientWidth - movement - 2 + "px";
                }
                this.onmouseup = function (eve) {
                    document.onmousemove = null;
                    document.onmouseup = null;
                    // line.releasePointerCapture();
                }
                //line.setPointerCapture();
                return false;
            }
        
    }
}


/*
Next (Eric): 
1. 鼠标拖动可变宽度
2. 键盘上下控制chatitemlist 切换
3. setting 点击界面
4. profile 点击界面

*/