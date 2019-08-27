import React from 'react';

var Total = (props) => {
  return (
    <div id="res-total-box">
      <div>
        <span>$36 x 6 nights</span>
        <span style={{float: "right"}}>$215</span>
      </div>
      <div id="res-thin-line"></div>
      <div>
        <span>Cleaning fee</span>
        <span style={{float: "right"}}>$24</span>
      </div>
      <div id="res-thin-line"></div>
      <div>
        <span>Service fee</span>
        <span style={{float: "right"}}>$31</span>
      </div>
      <div id="res-thin-line"></div>
      <div>
        <span>Total</span>
        <span style={{float: "right"}}>$270</span>
      </div>
    </div>
  )
}

export default Total;