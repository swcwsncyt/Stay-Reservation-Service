import React from 'react';
import downarrow from '../img/downarrow.png';
import uparrow from '../img/uparrow.png';
import styled from 'styled-components';

const ResGuestBox = styled.div`
  width: 326px;
  height: 62px;
  margin-bottom: 24px;
`
const ResGuestSelect = styled.div`
  width: 326px;
  height: 40px;
  border: 1px solid rgb(235, 235, 235);
  border-radius: 4px;
`
const ResGuestInnertext = styled.span`
  margin-left: 10px;
  line-height: 42px;
  padding: 0.3em 0.5em;
  border-radius: 3px;
`
const ResGuestOverlay = styled.div`
  position: absolute;
  width: 326px;
  height: 300px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  border-radius: 3px;
  border: 1px rgb(235, 235, 235) solid;
`
const ResGuestOverlayInner = styled.div`
  width: 294px;
  height: 268px;
  margin: 16px;
`
const ResGuestOverlayAdults = styled.div`
  width: 294px;
  height: 34px;
  margin-top: 16px;
  margin-bottom: 24px;
`
const ResGuestOverlayChildren = styled.div`
  width: 294px;
  height: 44px;
`
const ResGuestOverlayInfants = styled.div`
  width: 294px;
  height: 44px;
  margin-top: 24px;
  margin-bottom: 24px;
`
const ResGuestOverlayInfo = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
`
const ResGuestOverlayClose = styled.div`
  color: #008489;
  font-size: 14px;
  font-weight: 600;
  text-align: right;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`
const ResGuestOverlayBtnGroup = styled.div`
  float: right;
  width: 120px;
  height: 34px;
`
const ResGuestOverlayBtn = styled.button`
  border-color: rgb(0, 132, 137);
  border-radius: 50%;
  height: 34px;
  width: 34px;
  font-size: 14px;
  color: rgb(0, 132, 137);
  :disabled {
    border-color: rgba(0, 132, 137, 0.3);
    color: rgba(0, 132, 137, 0.3);
  }
`
const ResGuestOverlayQuantity = styled.span`
  display: inline-block;
  width: 45px;
  text-align: center;
`
const ResGuestOverlayBtnGroupExt = styled.div`
  float: right;
  width: 120px;
  height: 34px;
  padding-top: 5px;
`
const ResGuestArrow = styled.img`
  width: 16px;
  padding-top: 16px;
  padding-right: 16px;
  float: right;
`

class Guest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guest: 1,
      overlay: false,
      arrow: downarrow,
      adults: 1,
      children: 0,
      infants: 0,
      guestDisplay: "1 guest"
    }
  }
  //TODO: setup + - button control, disable - if guest is 0, disable + if max guest.
  onClickPlus(e) {
    var target = e.currentTarget.parentNode.nextSibling.innerText;
    if (target === "Adults") {
      var display;
      if (this.state.infants === 0) {
        display = `${this.state.guest + 1} guests`;
      } else if (this.state.infants === 1) {
        display = `${this.state.guest + 1} guests, 1 infant`;
      } else {
        display = `${this.state.guest + 1} guests, ${this.state.infants} infants`;
      }
      this.setState({
        adults: this.state.adults + 1,
        guest: this.state.guest + 1,
        guestDisplay: display
      })
    } else if (target === "Children") {
      var display;
      if (this.state.infants === 0) {
        display = `${this.state.guest + 1} guests`;
      } else if (this.state.infants === 1) {
        display = `${this.state.guest + 1} guests, 1 infant`;
      } else {
        display = `${this.state.guest + 1} guests, ${this.state.infants} infants`;
      }
      this.setState({
        children: this.state.children + 1,
        guest: this.state.guest + 1,
        guestDisplay: display
      })
    } else {
      var guest;
      this.state.guest === 1 ? guest = "guest": guest = "guests";
      var display;
      if (this.state.infants === 0) {
        display = `${this.state.guest} ${guest} 1 infant`;
      } else {
        display = `${this.state.guest} ${guest}, ${this.state.infants + 1} infants`;
      }
      this.setState({
        infants: this.state.infants + 1,
        guestDisplay: display
      })
    }
  }
  onClickMinus(e) {
    var target = e.currentTarget.parentNode.nextSibling.innerText;
    if (target === "Adults") {
      var guest;
      this.state.guest === 2 ? guest = "guest": guest = "guests";
      var display;
      if (this.state.infants === 0) {
        display = `${this.state.guest - 1} ${guest}`;
      } else if (this.state.infants === 1) {
        display = `${this.state.guest - 1} ${guest}, 1 infant`;
      } else {
        display = `${this.state.guest - 1} ${guest}, ${this.state.infants} infants`;
      }
      this.setState({
        adults: this.state.adults - 1,
        guest: this.state.guest - 1,
        guestDisplay: display
      })
    } else if (target === "Children") {
      var guest;
      this.state.guest === 2 ? guest = "guest": guest = "guests";
      var display;
      if (this.state.infants === 0) {
        display = `${this.state.guest - 1} ${guest}`;
      } else if (this.state.infants === 1) {
        display = `${this.state.guest - 1} ${guest}, 1 infant`;
      } else {
        display = `${this.state.guest - 1} ${guest}, ${this.state.infants} infants`;
      }
      this.setState({
        children: this.state.children - 1,
        guest: this.state.guest - 1,
        guestDisplay: display
      })
    } else {
      var guest;
      this.state.guest === 1 ? guest = "guest": guest = "guests";
      var display;
      if (this.state.infants === 1) {
        display = `${this.state.guest} ${guest}`;
      } else if (this.state.infants === 2) {
        display = `${this.state.guest} ${guest}, 1 infant`;
      } else {
        display = `${this.state.guest} ${guest}, ${this.state.infants - 1} infants`;
      }
      this.setState({
        infants: this.state.infants - 1,
        guestDisplay: display
      })
    }
  }
  //overlay click control
  onClick(e) {
    if (!this.state.overlay) {
      this.setState({
        overlay: !this.state.overlay,
        arrow: uparrow
      })
    } else {
      this.setState({
        overlay: !this.state.overlay,
        arrow: downarrow
      })
    }
  }
  onClickClose() {
    this.setState({
      overlay: false
    })
  }
  render() { //refractor consideration: separate the btn group from guest to an individul componenet
    return (
      <ResGuestBox>
        <div style={{color: "rgb(72, 72, 72)", fontSize: "12px", fontWeight: 600, marginBottom: `2px`}}>Guest</div>
        <ResGuestSelect style={this.state.overlay? {borderBottom: `2px solid rgb(0, 132, 137)`}:null} onClick={this.onClick.bind(this)}>
          <ResGuestInnertext style={this.state.overlay?{backgroundColor: `#99ede6`}: null}>{this.state.guestDisplay}</ResGuestInnertext>
          <ResGuestArrow src={this.state.arrow}/>
        </ResGuestSelect>
        {this.state.overlay ? 
        <ResGuestOverlay>
          <ResGuestOverlayInner>
            <ResGuestOverlayAdults>
              <ResGuestOverlayBtnGroup>
                <ResGuestOverlayBtn onClick={this.onClickMinus.bind(this)} disabled={this.state.adults === 1}>-</ResGuestOverlayBtn>
                <ResGuestOverlayQuantity>{this.state.adults}</ResGuestOverlayQuantity>
                <ResGuestOverlayBtn onClick={this.onClickPlus.bind(this)} disabled={this.state.children + this.state.adults === 4}>+</ResGuestOverlayBtn>
              </ResGuestOverlayBtnGroup>
              <div style={{fontSize: `16px`, fontWeight: `600`, lineHeight: `35px`}}>Adults</div>
            </ResGuestOverlayAdults>
            <ResGuestOverlayChildren>
              <ResGuestOverlayBtnGroupExt>
                <ResGuestOverlayBtn onClick={this.onClickMinus.bind(this)} disabled={this.state.children === 0}>-</ResGuestOverlayBtn>
                <ResGuestOverlayQuantity>{this.state.children}</ResGuestOverlayQuantity>
                <ResGuestOverlayBtn onClick={this.onClickPlus.bind(this)} disabled={this.state.children + this.state.adults === 4}>+</ResGuestOverlayBtn>
              </ResGuestOverlayBtnGroupExt>
              <div style={{fontSize: `16px`, fontWeight: `600`, width: `60px`}}>Children</div>
              <div style={{fontSize: `14px`, fontWeight: `400`, width: `70px`, marginTop: `5px`}}>Ages 2–12</div>
            </ResGuestOverlayChildren>
            <ResGuestOverlayInfants>
              <ResGuestOverlayBtnGroupExt>
                <ResGuestOverlayBtn onClick={this.onClickMinus.bind(this)} disabled={this.state.infants === 0}>-</ResGuestOverlayBtn>
                <ResGuestOverlayQuantity>{this.state.infants}</ResGuestOverlayQuantity>
                <ResGuestOverlayBtn onClick={this.onClickPlus.bind(this)} disabled={this.state.infants === 5}>+</ResGuestOverlayBtn>
              </ResGuestOverlayBtnGroupExt>
              <div style={{fontSize: `16px`, fontWeight: `600`, width: `55px`}}>Infants</div>
              <div style={{fontSize: `14px`, fontWeight: `400`, width: `55px`, marginTop: `5px`}}>Under 2</div>
            </ResGuestOverlayInfants>
            <ResGuestOverlayInfo>4 guests maximum. Infants don’t count toward the number of guests.</ResGuestOverlayInfo>
            <ResGuestOverlayClose onClick={this.onClickClose.bind(this)}>Close</ResGuestOverlayClose>
          </ResGuestOverlayInner>
        </ResGuestOverlay>
        : null}
      </ResGuestBox>
    )
  }
}

export default Guest;