import React from "react";
import Wrapper from "../components/Wrapper";

function Profile() {
    return (
        <div>
            <Wrapper>
                <div className="my-5 text-muted text-center">
                <h3 className="sectiontitle">Username | previous activity</h3>
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
            </Wrapper>
        </div >
    );
}

export default Profile;