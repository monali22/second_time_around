import React from "react";
import Wrapper from "../components/Wrapper";
import PostForm from "../components/PostForm";
import Webcam from "../components/Webcam";

function Donate() {
    return (
        <div>
            <Wrapper>
                <PostForm />
            <Webcam/>
            </Wrapper>
        </div>
    );
}

export default Donate;