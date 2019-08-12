import React from "react";
import Wrapper from "../components/Wrapper";
import PostForm from "../components/PostForm";
// import Webcam from "../components/Webcam";
import DonatePageTitle from "../components/DonatePageTitle";

function Donate() {
    return (
        <div>
            <DonatePageTitle/>
            <Wrapper>
                <PostForm />
            {/* <Webcam/> */}
            </Wrapper>
        </div>
    );
}

export default Donate;