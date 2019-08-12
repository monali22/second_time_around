import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

function ProfileTitle() {
    return (
        <div className="shippingHelp">
            <div className="offset-2 col-md-8">
                <h3 className="card-title sectiontitle">Username | previous activity</h3>
                <hr></hr>
            </div>
        </div>
    );
}

export default ProfileTitle;