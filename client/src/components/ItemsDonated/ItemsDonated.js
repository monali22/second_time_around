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
    stocks: [],
    stock_check:[],
    post_date:""
    
    
  }


 
  //load all stock
  componentDidMount() {
    this.loadStock();
  }

  loadStock = () => {
    var arr=[];
    API.getData()
      .then(res => {
        
        this.setState({ stock_check: res.data })
         
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
        


      
        console.log("ggggggggg");
        var todays_date=new Date(); 
        this.state.stock_check.map(item=>{

          //console.log(item.date);
         
          var post_dt=new Date(item.date);
          post_dt.setDate(post_dt.getDate()+6);
          if(post_dt<todays_date){
            //console.log(item.date);
            
              //console.log("inside delete"+id);
              API.deleteData(item._id)
                .then(res => {
                  
                  //console.log(res.data+"successfully deleted");
                  console.log("successfully deleted post");
                  //console.log(this.state.stock_arr.itemName);
                }
                )
                .catch(err => console.log(err));
            
           // console.log(item.date);
            //console.log(item.date);
          }
          else{
            console.log("no");
          }
        })
         //if claimed item not collected
            //var dt=new Date(element.date);
            //dt.setDate(dt.getDate()+1);
           // console.log(dt);
            //need to complete

            
          
        });
        arr.forEach(element => {

          var date=new Date(element.date);
          var date1=date.getDate();
          console.log("date",date1);
          
        });
        this.setState({ stocks: arr})

        
        console.log(res.data);
      }

      ) .catch(err => console.log(err));
   




  };







  render() {
   // console.log(this.state.stocks.length);
    return (
      <div className="row">
        {this.state.stocks.length > 0 && this.state.stocks.map(stock =>
        
          <ItemCard item={stock} key={stock.stock_id} />)}
      </div>);
  }

}
export default ItemsDonated;