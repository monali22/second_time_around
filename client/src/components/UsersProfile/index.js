import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import ItemCard2 from "../ItemCard2";

class UsersProfile extends React.Component {

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
        API.getUSerData(localStorage.getItem("nameId"))
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
    
    
    render(){
        return (
            <div className="row">
              {this.state.stocks.length > 1 && this.state.stocks.map(stock =>
              
                
                <ItemCard2 item={stock} key={stock.stock_id} />)}
            </div>);
    }
    
}

export default UsersProfile;