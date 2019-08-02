import React from 'react';
import "./style.css";

function postform() {
    return (
        <div>
            <div className="card">
                <div className="img-container">
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlFile1">Example file input</label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
        
export default postform;
