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
        <span>${props.details.price} x {props.diff} {props.diff === 1?`night`:`nights`}</span>
        <span style={{float: "right"}}>${(props.details.price*props.diff).toFixed(2)}</span>
      </div>
      <ResThinLine />
      <div>
        <span>Cleaning fee</span>
        <span style={{float: "right"}}>${props.details.cleanFee}</span>
      </div>
      <ResThinLine />
      <div>
        <span>Service fee</span>
        <span style={{float: "right"}}>${props.details.serviceFee}</span>
      </div>
      <ResThinLine />
      <div>
        <span>Total</span>
        <span style={{float: "right"}}>${(props.details.price * props.diff + props.details.cleanFee + props.details.serviceFee).toFixed(2)}</span>
      </div>
    </ResTotalBox>
  )
}

export default Total;