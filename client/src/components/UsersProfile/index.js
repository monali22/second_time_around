import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

function UsersProfile() {
    return (
        <div>
        <div className="offset-3 col-md-6">
            <h3 className="card-title sectiontitle">Username | previous activity</h3>
            <hr></hr>
        </div>
        <div className="col-md-4" >
            <div className="card cardstyle">
                <img className="card-img-top" src="" width="100px" height="200px"></img>
                <div className="card-body">
                    <h5 className="sectiontitle card-title">Item name</h5>
                    <hr></hr>
                    <p className="cardcontent card-text">This item was posted on ""</p>
                </div>
                <button type="button" className="navbutton btn btn-warning my-2 btn-sm">Delete post</button>
            </div>
        </div>
        </div>
    );
}

export default UsersProfile;