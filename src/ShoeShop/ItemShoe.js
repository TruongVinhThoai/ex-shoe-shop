import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let { image, name, price } = this.props.item;
    return (
      <div className="col-lg-4">
        <div className="card text-black">
          <div className="content-overlay" />
          <img src={image} className="card-img" alt="Phone Image" />
          <div className="card-body">
            <div className="text-center">
              <h5 className="card-title pt-3">{name}</h5>
              <span className="text-danger">
                <s>${Number(price) + 500}</s>
              </span>
              <br />
              <span className="text-muted mb-2">${price}</span>
            </div>
            <button
              className="btn btn-primary mr-2"
              onClick={() => {
                this.props.handleAddListShoe(this.props.item);
              }}
            >
              Add
            </button>
            <button
              className="btn btn-info"
              onClick={() => {
                this.props.handleDetailItem(this.props.item);
              }}
            >
              View
            </button>
          </div>
        </div>
      </div>

      // <div className="card text-left col-4">
      //   <img className="card-img-top" src={image} />
      //   <div className="card-body p-0">
      //     <small className="card-title">{name}</small>
      //     <p className="card-text">
      //       <button
      //         className="btn btn-primary mr-2"
      //         onClick={() => {
      //           this.props.handleAddListShoe(this.props.item);
      //         }}
      //       >
      //         Add
      //       </button>
      //       <button className="btn btn-info">View</button>
      //     </p>
      //   </div>
      // </div>
    );
  }
}
