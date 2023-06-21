//import React from "react";
import "./Body.css";
/*
function Body({children}){
    //const {name, location, favorList} = props;
    console.log(children);
    return (
        <div className="body">{children}</div>
    );
}
export default Body;
*/

function Body(){
    function handleOnClick(e){
        alert(e.target.name);
        console.log(e.target.name);
    }
    return (
        <div className="body">
            <button name = "buttonA" onClick = {handleOnClick}> buttonA</button>
            <button name = "buttonB" onClick = {handleOnClick}> buttonB</button>
        </div>
    );
}
export default Body;