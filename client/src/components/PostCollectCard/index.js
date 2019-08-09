import React from 'react';
import "./style.css";

function PostCollectCard() {
 


    return (
        <div>
            <div className="card">
                <div className="img-container">
                    <img alt="table" src="https://cdn-images.article.com/products/SKU379/2890x1500/image14062.jpg?fit=max&w=2600&q=50&fm=webp" />
                </div>
                <div className="card-body">
                    <p className="card-text">Available for 24 hours | 0.24 miles from you</p>
                    {/*<!-- Collect Card -->*/}
                    {/*<!-- Button trigger modal -->*/}
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                        I want it</button>
                    {/*<!-- Modal -->*/}
                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Pick up information</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="InputDate">Name</label>
                                            <input type="text" className="form-control" id="InputName" aria-describedby="Name"
                                                placeholder="Enter Name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="InputDate">Date</label>
                                            <input type="date" className="form-control" id="InputDate" aria-describedby="Date"
                                                placeholder="Enter DD/MM/YYYY" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="InputTime">ETA of Pick Up</label>
                                            <input type="time" className="form-control" id="InputTime" aria-describedby="Time"
                                                placeholder="Enter HH:MM " />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="FormControlTextarea">Message</label>
                                            <textarea className="form-control" id="FormControlTextarea" rows=""
                                                placeholder="Enter optional message to user"></textarea>
                                        </div>

                                    </form>
                                    <div className="modal-footer">
                                        <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default PostCollectCard;