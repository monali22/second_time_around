import React from 'react';
import "./itemcardstyle.css";
const ItemCard=({item})=>{
    //console.log(item);
    return(
        <div className="card" >
    
    <div className="card-body">
      <h5 className="sectiontitle card-title">Catalog</h5>
      <hr></hr>
      <img src={item.url} width="100px" height="100px"></img>
      <p className="formfield card-text">Product:{item.itemName}</p>
      <p className="formfield card-text">Department:{item.category}</p>
      <p className="formfield card-text">Pickup location:{item.Address}</p>
      <p className="formfield card-text">Posted on:{item.date}</p>
      <p className="formfield card-text">Items available for 5 days after posting</p>

      <a href="#" className="navbutton btn btn-warning my-2 btn-sm">I want it</a>
    </div>
  </div>
    )
}
export default ItemCard;