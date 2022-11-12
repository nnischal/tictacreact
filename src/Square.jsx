import React from "react";
import './style/Style.css';




const Square = ({ id, className, state }) => {
    
    return (
        <div classname={`square-container ${className} ${state=== 'X' ? "x-color" : "y-color"}`} id={id}>{state}</div>
    );
    
};

export default Square;
