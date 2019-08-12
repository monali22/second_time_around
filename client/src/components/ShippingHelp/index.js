import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

function ShippingHelp() {
    return (
        <div className="shippingHelp">
            <div className="container">
                <div className="row">
                    <div className="offset-2 col-md-8">
                        <hr></hr>
                        <a className="card-title sectiontitle" href="https://www.dolly.com/" target="_blank">Need any help with shipping?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShippingHelp;