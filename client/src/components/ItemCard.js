import React, { Component } from 'react';
import API from "../utils/API";
import "./itemcardstyle.css";

const ItemCard = ({ item }) => {
  console.log(item);
  const updatePost = (id, claimed) => {

    //console.log("inside click method");
    claimed = true;
    console.log(id, claimed);
  }

  return (
    <div className="col-md-4">
      <div className="card cardstyle">
        {/* <h5 className="sectiontitle card-title">Catalog</h5> */}
        <img className="card-img-top" src={item.url} width="100px" height="200px"></img>
        <div className="card-body">
        <p className="sectiontitle formfield card-title">{item.itemName}</p>
        <hr></hr>
          <p className="formfield card-text">Department:{item.category}</p>
          <p className="formfield card-text">Pickup location:{item.Address}</p>
          <p className="formfield card-text">Posted date:{item.date}</p>
          <p>Items available for 5 days after posting</p>
          <button type="button" className="navbutton btn btn-warning my-2 btn-sm" onClick={() => updatePost(item._id, item.claimed)}  >i want it</button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
