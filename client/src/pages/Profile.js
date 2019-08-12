import React from "react";
import CardWrapper from "../components/CardWrapper";
import UsersProfile from "../components/UsersProfile";
import ProfileTitle from "../components/ProfileTitle";

function Profile() {
    return (
        <div>
            <ProfileTitle/>
            <CardWrapper>
                <UsersProfile />
            </CardWrapper>
        </div >
    );
}

export default Profile;