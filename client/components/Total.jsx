import React from 'react';

var Total = (props) => {
  return (
    <div id="res-total-box">
      <div>
        <span>${props.details?props.details.price:null} x 1 night</span>
        <span style={{float: "right"}}>${props.details?props.details.price*1:null}</span>
      </div>
      <div id="res-thin-line"></div>
      <div>
        <span>Cleaning fee</span>
        <span style={{float: "right"}}>${props.details?props.details.cleanFee:null}</span>
      </div>
      <div id="res-thin-line"></div>
      <div>
        <span>Service fee</span>
        <span style={{float: "right"}}>${props.details?props.details.serviceFee:null}</span>
      </div>
      <div id="res-thin-line"></div>
      <div>
        <span>Total</span>
        <span style={{float: "right"}}>${props.details?props.details.price*1 + props.details.cleanFee + props.details.serviceFee:null}</span>
      </div>
    </div>
  )
}

export default Total;