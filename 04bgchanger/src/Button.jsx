import React from "react";

function Button({color="black"}){
    
    return(
        <button className="rounded-xl p-2 text-black m-2" backgroundColor={color} onClick={document.body.style.backgroundColor = {color}}>{color}</button>
    )
}

export default Button;