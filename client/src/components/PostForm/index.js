import React from "react";
import "./style.css";

function PostForm() {
    return (
        <form>
            <div className="form-group">
                <label for="exampleFormControlFile1">Example file input</label>
                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
            </div>
        </form>
    );
}

export default PostForm;