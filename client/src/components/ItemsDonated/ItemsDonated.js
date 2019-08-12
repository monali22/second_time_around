import React, { Component } from "react";
import API from "../../utils/API";
import ItemCard from "../ItemCard";


class ItemsDonated extends Component {

  state = {
    item: "",
    quantity: "",
    category: "",
    stock_id: "",
    img_url: "",
    stocks: []
    
    
  }
  //load all stock
  componentDidMount() {
    this.loadStock();
  }

  loadStock = () => {
    var arr=[];
    API.getData()
      .then(res => {
        
        //this.setState({ stocks: res.data })
      
        res.data.forEach(element => {
            
          if(element.claimed =="false")
          {
            arr.push(element);


          }
        else if(element.claimed=="true")
        {
          //console.log("pickupppp"+element.claimedDate);
          //checking date claimed is less that current date (no pickup happened)
          var dtcl=new Date(element.claimedDate);
          dtcl.setDate(dtcl.getDate()+2);
          var todays_date=new Date(); 
          if(dtcl<todays_date)
          {
            arr.push(element);
            console.log("no pickup on date +2 so back to stock till 5days starting from posted date");
          }
          else{
           console.log("item pickup success or going to happen");
          }
          
        }
        
            //if claimed item not collected
            var dt=new Date(element.date);
            dt.setDate(dt.getDate()+1);
           // console.log(dt);
            //need to complete

            
          
        });
        this.setState({ stocks: arr})
        // this.props.updatestock(this.state.stocks);
        console.log(res.data);
      }

      )
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.stocks.length);
    return (
      <div>
      {/* <div className="row"> */}
        {this.state.stocks.length > 0 && this.state.stocks.map(stock =>
        
          <ItemCard item={stock} key={stock.stock_id} />)}
      </div>);
  }

}
export default ItemsDonated;