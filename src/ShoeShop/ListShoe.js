import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  renderListShoe = () => {
    return this.props.list.map((shoe, index) => {
      return (
        <ItemShoe
          handleDetailItem={this.props.handleDetail}
          handleAddListShoe={this.props.handleAddShoe}
          item={shoe}
          key={index}
        />
      );
    });
  };
  render() {
    return <div className="col-6 row">{this.renderListShoe()}</div>;
  }
}
