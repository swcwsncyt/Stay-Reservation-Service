import React from 'react';

const ResReserveBtn = styled.button`
  width: 326px;
  height: 46px;
  margin-top: 12px;
  background-color: rgb(255, 90, 95);
  border: rgb(255, 90, 95);
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  color: white;
`

var Reserve = (props) => {
  return (
    <ResReserveBtn>Reserve</ResReserveBtn>
  )
}
export default Reserve;