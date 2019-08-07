import React from 'react';
const ItemCard=({item})=>{
    //console.log(item);
    return(
        <div className="card" >
    
    <div className="card-body">
      <h5 className="card-title">Catelog</h5>
      <img src={item.url} width="100px" height="100px"></img>
      <p className="card-text">Product:{item.itemName}</p>
      <p className="card-text">Department:{item.category}</p>
      <p className="card-text">Pickup location:{item.Address}</p>
      <p className="card-text">Posted date:{item.date}</p>
      <p>Items available for 5 days after posting</p>

      <a href="#" className="btn btn-primary">I want it</a>
    </div>
  </div>
    )
}
export default ItemCard;