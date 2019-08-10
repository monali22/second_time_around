import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

function ShippingHelp() {
    return (
        <div className="shippingHelp">
            <div className="offset-2 col-md-8">
                <h3 className="card-title sectiontitle">Hurry up! Free items are available for only 5 days after posted.</h3>
                <hr></hr>
            </div>
        </div>
    );
}

export default ShippingHelp;