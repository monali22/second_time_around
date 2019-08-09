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
    API.getData()
      .then(res => {
        this.setState({ stocks: res.data })
        // this.props.updatestock(this.state.stocks);
        //console.log(res.data);
      }

      )
      .catch(err => console.log(err));
  };

  render() {
    //console.log(this.state.stocks);
    return (
      <div className="row">
        {this.state.stocks.length > 0 && this.state.stocks.map(stock => <ItemCard item={stock} />)}
      </div>);
  }

}
export default ItemsDonated;