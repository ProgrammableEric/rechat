import React, { Component } from 'react';
import './style.css';
import MainPageLeft from '../../components/MainPageLeft';
import ChatWind from '../../components/ChatWindow';


export default class PrivateChat extends Component {
    handleDrag(){
        window.onload = function(){
            var line = this.document.getElementById("line");
            var left = this.document.getElementById("left");
            var right = this.document.getElementById("right");
            var box = this.document.getElementById("box");
            line.onmousedown = function(e) {
                var startX = e.clientX;
                line.left = line.offsetLeft;
                this.onmousemove = function (e) {
                    var endX = e.clientX;
                    var movement = line.left + (endX - startX);
                    var maxMov = box.clientWidth -line.offsetWidth;
                    // add max and min widths for left part here

                    line.style.left = movement;
                    left.style.width = movement + "px";
                    right.style.width = (box.clientWidth - movement - 2 ) + "px";
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

    render() {
        return (
            <div className="backgroundOverlay">
                <div className="privateChatWrapper" id="box">
                    <MainPageLeft id="left"/>
                    <div id="line" onClick={this.handleDrag()}></div>
                    <ChatWind id="right"/>
                </div>
                
            </div>
        ) 
    }
}


/*
Next (Eric): 
1. 鼠标拖动可变宽度
2. 键盘上下控制chatitemlist 切换
3. setting 点击界面
4. profile 点击界面

*/