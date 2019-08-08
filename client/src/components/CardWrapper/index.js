import React from "react";
import "./style.css";

function CardWrapper(props) {
    return <div className="classwrapper">
        <div className="container">
                    {props.children}
        </div>
    </div>;
}

export default CardWrapper;