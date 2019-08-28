import React from 'react';

var RoomDetails = (props) => {
  return (
    <div>
      <div id="res-price-details">
        <span style={{fontSize: `22px`, fontWeight: `800`}}>${props.details?props.details.price:null}</span>
        <span style={{fontSize: `12px`, fontWeight: `600`}}> per night</span>
      </div>
      <div id="res-review-details">
        <span style={{fontSize: `9px`, color: `rgb(0, 132, 137)`}}>★★★★★</span>
        <span style={{fontSize: `12px`, fontWeight: `600`}}> {props.details?props.details.reviews:null}</span>
      </div>
    </div>
  )
}

export default RoomDetails;