import React ,{Component} from 'react';
import API from "../utils/API"
//const ItemCard=({item})=>{
    //console.log(item);
    const ItemCard= ({item})=>{
      console.log(item);
   const updatePost=(id,claimed)=>{

    //console.log("inside click method");
    claimed=true;
    console.log(id,claimed);
   
    /*API.updatePost(id,claimed)
    .then(res => {
      console.log(res.data);
    
    } 
    )
     .catch(err => console.log(err));
*/
   }
    
    return(
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
   

      <button type="button"  className="navbutton btn btn-warning my-2 btn-sm" onClick={() => updatePost(item._id,item.claimed)}  >i want it</button>
    </div>
  </div>
    );
}
    
export default ItemCard;