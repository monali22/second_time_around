import React from 'react';
const ItemCard=({item})=>{
    //console.log(item);
    return(
        <div className="card" >
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{item.category}</h5>
      <p className="card-text">{item.itemName}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    )
}
export default ItemCard;