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
    stocks: [],
    user_name: ""

  }
  //load all stock
  componentDidMount() {
    this.loadStock();
  }

  loadStock = () => {
    var arr = [];
    API.getUSerData(localStorage.getItem("nameId"))
      .then(res => {

        //this.setState({ stocks: res.data })

        res.data.forEach(element => {

          arr.push(element);

        });
        this.setState({ stocks: arr })
        // this.props.updatestock(this.state.stocks);

        console.log(res.data);
      }

      )
      .catch(err => console.log(err));

    API.findUserID(localStorage.getItem("nameId"))
      .then(res => {

        console.log(res.data);
        this.setState({ user_name: res.data.name });
        console.log(this.state.user_name);
      }

      )
      .catch(err => console.log(err));



  };


  render() {
    return (
      <div>
        <div className="offset-3 col-md-6">
          <h3 className="card-title sectiontitle">{this.state.user_name} | previous activity</h3>
          <hr></hr>
        </div>
        <div className="row">

          {this.state.stocks.map(stock =>


            <ItemCard2 item={stock} key={stock.stock_id} />)}
        </div>
      </div>
    );
  }

}

export default UsersProfile;