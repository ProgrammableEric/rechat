import React, { Component } from 'react';
import './style.css';
import MainPageLeft from '../../components/MainPageLeft';
import ChatWind from '../ChatWindow';


export default class PrivateChat extends Component {
    

    render() {
        function handleDrag (e){
            var line = document.getElementById("line");
            var left = document.getElementById("left"); // return null
            var right = document.getElementById("right"); // return null
            var box = document.getElementById("box");
            console.log("here is: "+ left);
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
            }
        }

        window.onload = function(e) {
            var line = document.getElementById("line");
            var left = document.getElementById("left");
            var right = document.getElementById("right"); 
            var box = document.getElementById("box");
            line.onmousedown = function(e) {
                var startX = e.clientX;
                line.left = line.offsetLeft;
                onmousemove = function (e) {
                    var endX = e.clientX;
                    var movement = line.left + (endX - startX);
                    line.style.left = movement;
                    left.style.width = movement + "px";
                    if (movement < 220) {
                        movement = 220;
                        left.style.width = 220 + "px";
                    } else if (movement>260) {
                        movement = 260;
                        left.style.width = 260 + "px";
                    }
                    console.log(movement);
                    right.style.width = box.clientWidth - movement - 2 + "px";
                }
                onmouseup = function (eve) {
                    onmousemove = null;
                    onmouseup = null;
                    
                }
            }
        }

        return (                                                               
            <div className="backgroundOverlay">
                <div className="privateChatWrapper" id="box">
                    <div id="left"><MainPageLeft/></div>
                    <div id="line"></div>
                    <div id="right"><ChatWind/></div>
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