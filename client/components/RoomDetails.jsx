import React from 'react';

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
  var star, starImg;
  props.details ? star = props.details.star : null;
  star === 1 ? starImg = "https://fec-reservation.s3-us-west-1.amazonaws.com/onestar.png" : null;
  star === 1.5 ? starImg = "https://fec-reservation.s3-us-west-1.amazonaws.com/onehstar.png" : null;
  star === 2 ? starImg = "https://fec-reservation.s3-us-west-1.amazonaws.com/twostar.png" : null;
  star === 2.5 ? starImg = "https://fec-reservation.s3-us-west-1.amazonaws.com/twohstar.png" : null;
  star === 3 ? starImg = "https://fec-reservation.s3-us-west-1.amazonaws.com/threestar.png" : null;
  star === 3.5 ? starImg = "https://fec-reservation.s3-us-west-1.amazonaws.com/threehstar.png" : null;
  star === 4 ? starImg = "https://fec-reservation.s3-us-west-1.amazonaws.com/fourstar.png" : null;
  star === 4.5 ? starImg = "https://fec-reservation.s3-us-west-1.amazonaws.com/fourhstar.png" : null;
  star === 5 ? starImg = "https://fec-reservation.s3-us-west-1.amazonaws.com/fivestar.png" : null;
  return (
    <div>
      <ResPriceDetails>
        <span style={{fontSize: `22px`, fontWeight: `800`}}>${props.details?props.details.price:null}</span>
        <span style={{fontSize: `12px`, fontWeight: `600`}}> per night</span>
      </ResPriceDetails>
      <ResReviewDetails>
        <img src={starImg} style={{height: "10px"}}/>
        <span style={{fontSize: `12px`, fontWeight: `600`}}> {props.details?props.details.reviews:null}</span>
      </ResReviewDetails>
    </div>
  )
}

export default RoomDetails;