import React, { Component } from "react";

export default class DetailShoe extends Component {
  renderDetail = () => {
    let { Detail } = this.props;
    return (
      <div class="content-details">
        <img width={200} src={Detail.image} alt="" />
        <h4>{Detail.name}</h4>
        <span class="text-dark">
          <p>Giá: ${Detail.price}</p>
        </span>
        <span class="text-dark">
          <p>Giới thiệu: {Detail.shortDescription}</p>
        </span>
        <span class="text-dark">
          <p>Chi tiết sản phẩm: {Detail.description}</p>
        </span>

        <p>Hàng còn: {Detail.quantity} sản phẩm</p>
      </div>
    );
  };
  render() {
    return <div>{this.renderDetail()}</div>;
  }
}
