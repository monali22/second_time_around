import React from 'react';
import "./style.css";

function PostCollectCard() {
    // Setting the componet's initial state
    // state = {
    //     name: "",
    //     date: "",
    //     time: "",
    //     message: "",

    // };

    // // handle any changes to the input fields
    // handleInputChange = event => {
    //     // Getting the value and name of the input which triggered the change
    //     const { name, value } = event.target;

    //     // Set the state for the appropriate input field
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();

    //     this.setState({ name: "" });
    // };


    return (
        <div>
            <div className="card">
                <div className="img-container">
                    <img alt="" src="https://cdn-images.article.com/products/SKU379/2890x1500/image14062.jpg?fit=max&w=2600&q=50&fm=webp" />
                </div>
                <div className="card-body">
                    <p className="card-text">Available for 24 hours | 0.24 miles from you</p>
                    {/*<a href="#" class="btn btn-primary">Go somewhere</a>*/}
                    {/*<!-- Collection Card -->*/}
                    {/*<div className="container">*/}
                        {/*<!-- Button trigger modal -->*/}
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                            I want it</button>

                        {/*<!-- Modal -->*/}
                        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div class="modal-header">
                                        <h5 className="modal-title" id="exampleModalCenterTitle">Collection Info</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label for="InputDate">Name</label>
                                                <input type="text" class="form-control" id="InputName" aria-describedby="Name"
                                                    placeholder="Enter Name" />
                                            </div>
                                            <div className="form-group">
                                                <label for="InputDate">Date</label>
                                                <input type="date" class="form-control" id="InputDate" aria-describedby="Date"
                                                    placeholder="Enter DD/MM/YYYY" />
                                            </div>
                                            <div className="form-group">
                                                <label for="InputTime">ETA of Pick Up</label>
                                                <input type="time" class="form-control" id="InputTime" aria-describedby="Time"
                                                    placeholder="Enter HH:MM " />
                                            </div>
                                            <div className="form-group">
                                                <label for="FormControlTextarea">Message</label>
                                                <textarea class="form-control" id="FormControlTextarea" rows=""
                                                    placeholder="Enter optional message to user"></textarea>
                                            </div>

                                        </form>
                                        <div class="modal-footer">
                                            <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};


export default PostCollectCard;