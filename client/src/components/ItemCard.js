import React from 'react';

const ItemCard = ({ item }) => {
  //console.log(item);
  return (
    <div>
      <div className="card" >
        <div className="img-container">
          <img alt="" src={item.url} width="100px" height="100px" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Catelog</h5>
          <p className="card-text">Product:{item.itemName}</p>
          <p className="card-text">Department:{item.category}</p>
          <p className="card-text">Pickup location:{item.Address}</p>
          <p className="card-text">Posted date:{item.date}</p>
          <p>Items available for 5 days after posting</p>
          {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"> */}
                        {/* I want it</button> */}
          <a href="#" className="btn btn-primary">I want it</a>
        </div>
      </div>
    </div>
  )
}

export default ItemCard;