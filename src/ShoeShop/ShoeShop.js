import React, { Component } from "react";
import { GIAM_SO_LUONG, TANG_SO_LUONG, shoeArr } from "./Data";
import CartShoe from "./CartShoe";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";

export default class ShoeShop extends Component {
  state = {
    shoeArr: shoeArr,
    cart: [],
    detail: {},
  };
  handleAddToCart = (shoe) => {
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => {
      return item.id == shoe.id;
    });

    if (index == -1) {
      let newShoe = { ...shoe, soLuong: 1 };
      cloneCart.push(newShoe);
    } else {
      cloneCart[index].soLuong++;
    }

    // Kiem tra sp da co trong gio hang hay chua
    // th1: sp chua co trong gio hang => tao obj moi co them key soLuong: 1
    // th2: da co trong gio hang => update key soLuong len 1 don vi

    this.setState({
      cart: cloneCart,
    });
  };
  handleRemove = (idShoe) => {
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => {
      return item.id === idShoe;
    });
    console.log("🚀 ~ file: ex_Shoe.js:42 ~ Ex_Shoe ~ index ~ index:", index);
    cloneCart.splice(index, 1);
    this.setState({ cart: cloneCart });
  };
  handleChangeQuantity = (idShoe, option) => {
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => {
      return item.id == idShoe;
    });
    if (option == TANG_SO_LUONG) {
      cloneCart[index].soLuong++;
    } else {
      cloneCart[index].soLuong--;

      cloneCart[index].soLuong == 0 && this.handleRemove(idShoe);
    }
    this.setState({ cart: cloneCart });
  };

  handleChangeQuantity_v2 = (idShoe, option) => {
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => {
      return item.id == idShoe;
    });
    option == TANG_SO_LUONG && cloneCart[index].soLuong++;
    option == GIAM_SO_LUONG &&
      cloneCart[index].soLuong-- &&
      cloneCart[index].soLuong == 0 &&
      this.handleRemove(idShoe);

    this.setState({ cart: cloneCart });
  };
  handleChangeDetail = (shoe) => {
    this.setState({
      detail:
        shoeArr[
          this.state.shoeArr.findIndex((item) => {
            return item.id == shoe.id;
          })
        ],
    });
  };
  render() {
    return (
      <div>
        <div className="row">
          <CartShoe
            handleChangeQuantityShoe={this.handleChangeQuantity_v2}
            handleRemoveShoe={this.handleRemove}
            cart={this.state.cart}
          />
          <ListShoe
            list={this.state.shoeArr}
            handleAddShoe={this.handleAddToCart}
            handleDetail={this.handleChangeDetail}
          />
        </div>
        <DetailShoe Detail={this.state.detail} />
      </div>
    );
  }
}
