import React from "react";
import "./Button.scss";

const Button = ({children,className=""}) => {
    return ( 
        <button type="button" className={`btn btn-primary ${className}`} >{children}</button>
     );
}
 
export default Button;