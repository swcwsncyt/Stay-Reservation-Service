import React from 'react';
import styled from 'styled-components';

const ResTotalBox = styled.div`
  width: 326px;
  height: 137px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 400;
`
const ResThinLine = styled.div`
  width: 326px;
  height: 1px;
  background-color: rgb(235, 235, 235);
  margin-top: 10px;
  margin-bottom: 10px;
`

var Total = (props) => {
  return (
    <ResTotalBox>
      <div>
        <span>${props.details?props.details.price:null} x 1 night</span>
        <span style={{float: "right"}}>${props.details?props.details.price*1:null}</span>
      </div>
      <ResThinLine />
      <div>
        <span>Cleaning fee</span>
        <span style={{float: "right"}}>${props.details?props.details.cleanFee:null}</span>
      </div>
      <ResThinLine />
      <div>
        <span>Service fee</span>
        <span style={{float: "right"}}>${props.details?props.details.serviceFee:null}</span>
      </div>
      <ResThinLine />
      <div>
        <span>Total</span>
        <span style={{float: "right"}}>${props.details?props.details.price*1 + props.details.cleanFee + props.details.serviceFee:null}</span>
      </div>
    </ResTotalBox>
  )
}

export default Total;