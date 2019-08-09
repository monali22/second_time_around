import React ,{Component} from 'react';
import API from "../utils/API"

   class ItemCard extends Component{
    

   state={
     number:"",
     //claimed_date:"",
     text:"i want it",
     idtest:""
   }
   handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

handleClick=(id)=>{
  
    console.log("inside click"+id);
    var claimed_date=new Date(); 
    console.log("ooo"+claimed_date);
   //this.setState({idtest:id})
    //var claimedDate=claimed_date;
    API.updatePost(id)
    .then(res => {
      console.log(res.data);
      
    })
    .catch(err => console.log(err));
  
  this.setState({text:"claimed"})

};






     updatePost=()=>
    {
      console.log(this.state.claimed_date);
      console.log(this.state.idtest);
     // console.log("gafsgas");
    const msg={
      number:this.state.number,
      message:"Thanks for visiting SecondTimeAround!order confirmed.collect your item within 2 days"
    }
    
      API.getEmail(msg)
      .then(res => {
       
        // this.props.updatestock(this.state.stocks);
        console.log(res.data);
      }

      )
      .catch(err => console.log(err));
      
    };
   
    render()
    {

      //console.log(this.props.item.itemName);
      
      return (
        <div className="card" >
    ​
          <div className="card-body">
            <h5 className="sectiontitle card-title">{this.props.item.itemName}</h5>
            <hr></hr>
            <img src={this.props.item.url} width="100px" height="100px"></img>
          
          
            <p className="formfield card-text">Pickup location:{this.props.item.Address}</p>
            <p className="formfield card-text">Posted date:{this.props.item.date}</p>
            <p>Items available for 5 days after posting</p>
    ​          
            {/*<!-- Button trigger modal -->*/}
            <button type="button" className="navbutton btn btn-warning my-2 btn-sm" data-toggle="modal" data-target="#exampleModalCenter1"  onClick={() => this.handleClick(this.props.item._id)} >{this.state.text}</button>
            {/*<!-- Modal -->*/}
            <div className="modal fade" id="exampleModalCenter1" tabIndex="-1" role="dialog"
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
                        <label htmlFor="InpuNumber">Number</label>
                        <input type="text" className="form-control" id="Inputnumber" aria-describedby="Name"
                          placeholder="Enter Number" name="number"  onChange={this.handleInputChange} />
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
    ​
                    </form>
                    <div className="modal-footer">
                      <button type="button" value="Submit" className="navbutton btn btn-warning my-2 btn-sm"  onClick={this.updatePost}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}
}   
export default ItemCard;
