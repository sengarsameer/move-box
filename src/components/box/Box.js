import React, { useState } from "react";
import "./box.css";

const Box = () => {
    const [count, setCount] = useState(1);
    var [selectedBox, setSelectedBox] = useState([])
    function moveBox(id) {
        document.getElementById(id).style.backgroundColor="red";
        var list_items = document.getElementById(id);
        if(selectedBox.length > 0) {
            // console.log("length", selectedBox.length)
            // console.log("IF", selectedBox[0])
            document.getElementById(selectedBox[0]).removeEventListener('click', function(){console.log("alert")})
            setSelectedBox(selectedBox = []);
        }
        else {
            // console.log("Push", list_items)
            setSelectedBox(selectedBox.concat(id))
        }
            list_items.addEventListener('click',function(){
    
                // console.log(list_items);
                var objImage= null;
                objImage=list_items;              
                objImage.style.position='relative';
                objImage.style.left='0px';
                objImage.style.top='0px';
                objImage.style.backgroundColor='red'
    
                
                function getKeyAndMove(e){  
                                
                    var key_code=e.which||e.keyCode;
                    switch(key_code){
                        case 37: //left arrow key
                        moveLeft();
                        break;
                        case 38: //Up arrow key
                        moveUp();
                        break;
                        case 39: //right arrow key
                        moveRight();
                        break;
                        case 40: //down arrow key
                        moveDown();
                        break;
                        case 87: //Up W key
                        moveUp();
                        break;
                        case 65: //left A key
                        moveLeft();
                        break;
                        case 83: //down S key
                        moveDown();
                        break;
                        case 68: //right D key
                        moveRight();
                        break;
                        // Delete an element from del key
                        // case 46:
                        // deleteBox();
                        // break;
                        default:
                        console.log(e);                         
                    }
                }
                function moveLeft(){
                    if(parseInt(objImage.style.left)-5 > 0) {
                    objImage.style.left=parseInt(objImage.style.left)-5 +'px';
                    }
                    // objImage.style.position='static';
                }
                function moveUp(){
                    if(parseInt(objImage.style.top)-5 > 15) {
                    objImage.style.top=parseInt(objImage.style.top)-5 +'px';
                    }
                    // objImage.style.position='static';
                }
                function moveRight(){
                    if(parseInt(objImage.style.left)+5 > 0 && parseInt(objImage.style.left)+5 < 400) {
                    objImage.style.left=parseInt(objImage.style.left)+5 +'px';
                    }
                    // objImage.style.position='static';
                }
                function moveDown(){
                    if(parseInt(objImage.style.top)+5 > 0 && parseInt(objImage.style.top)+5 < 200) {
                    objImage.style.top=parseInt(objImage.style.top)+5 +'px';
                    }
                    // objImage.style.position='static';
                }
                // function deleteBox(){
                //     document.getElementById(id).remove();
                // }
                window.addEventListener("keydown", getKeyAndMove);
            });
    }

    function addBoxes() {
        setCount(count + 1);
        var mainBox = document.createElement("div");
        const newBox = document.createElement("div");
        mainBox.setAttribute("id", count);
        mainBox.setAttribute("draggable", true)
        newBox.setAttribute("draggable", true)
        mainBox.className = "mainBox";
        mainBox.style.cssText = `z-index: ${count};`
        newBox.className = "newBox";
        newBox.style.cssText = `z-index: ${count};`
        mainBox.onclick = function () {
            moveBox(count);
        };
        var mainDiv = document.body.appendChild(mainBox);
        mainDiv.appendChild(newBox);
    }
    return (
        // <div onKeyDown={getKeyAndMove} tabIndex="0">
        <div className="main">
            
            <button style={{marginLeft: 15}} onClick={addBoxes}>Add Box</button>

            <div className="arena">

            </div>
        </div>
    );
};

export default Box;
