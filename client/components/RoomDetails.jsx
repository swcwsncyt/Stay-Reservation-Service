import React from 'react';
import styled from 'styled-components';

const ResPriceDetails = styled.div`
  width: 326px;
  height: 28px;
  margin-top: 16px;
`
const ResReviewDetails = styled.div`
  width: 326px;
  height: 20px;
`

var RoomDetails = (props) => {
  return (
    <div>
      <ResPriceDetails>
        <span style={{fontSize: `22px`, fontWeight: `800`}}>${props.details?props.details.price:null}</span>
        <span style={{fontSize: `12px`, fontWeight: `600`}}> per night</span>
      </ResPriceDetails>
      <ResReviewDetails>
        <span style={{fontSize: `9px`, color: `rgb(0, 132, 137)`}}>★★★★★</span>
        <span style={{fontSize: `12px`, fontWeight: `600`}}> {props.details?props.details.reviews:null}</span>
      </ResReviewDetails>
    </div>
  )
}

export default RoomDetails;