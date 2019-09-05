import React from 'react';
import oneStar from '../img/onestar.png';
import onehStar from '../img/onehstar.png';
import twoStar from '../img/twostar.png';
import twohStar from '../img/twohstar.png';
import threeStar from '../img/threestar.png';
import threehStar from '../img/threehstar.png';
import fourStar from '../img/fourstar.png';
import fourhStar from '../img/fourhstar.png';
import fiveStar from '../img/fivestar.png';

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
  star === 1 ? starImg = oneStar : null;
  star === 1.5 ? starImg = onehStar : null;
  star === 2 ? starImg = twoStar : null;
  star === 2.5 ? starImg = twohStar : null;
  star === 3 ? starImg = threeStar : null;
  star === 3.5 ? starImg = threehStar : null;
  star === 4 ? starImg = fourStar : null;
  star === 4.5 ? starImg = fourhStar : null;
  star === 5 ? starImg = fiveStar : null;
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