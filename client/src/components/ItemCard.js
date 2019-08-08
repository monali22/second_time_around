import React, { Component } from 'react';
import API from "../utils/API"
//const ItemCard=({item})=>{
//console.log(item);
const ItemCard = ({ item }) => {
  console.log(item);
  const updatePost = (id, claimed) => {

    //console.log("inside click method");
    claimed = true;
    console.log(id, claimed);

    /*API.updatePost(id,claimed)
    .then(res => {
      console.log(res.data);
    
    } 
    )
     .catch(err => console.log(err));
*/
  }

  return (
    <div className="card" >

      <div className="card-body">
        <h5 className="sectiontitle card-title">Catalog</h5>
        <hr></hr>
        <img src={item.url} width="100px" height="100px"></img>
        <p className="formfield card-text">Product:{item.itemName}</p>
        <p className="formfield card-text">Department:{item.category}</p>
        <p className="formfield card-text">Pickup location:{item.Address}</p>
        <p className="formfield card-text">Posted date:{item.date}</p>
        <p>Items available for 5 days after posting</p>

        {/*<!-- Button trigger modal -->*/}
        <button type="button" className="navbutton btn btn-warning my-2 btn-sm" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => updatePost(item._id, item.claimed)}  >i want it</button>
        {/*<!-- Modal -->*/}
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
          aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Collection Info</h5>
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
                  <button type="submit" value="Submit" className="navbutton btn btn-warning my-2 btn-sm">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;