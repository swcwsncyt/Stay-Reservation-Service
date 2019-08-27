import React from 'react';
import downarrow from '../img/downarrow.png';
import uparrow from '../img/uparrow.png';

class Guest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guest: 1,
      overlay: false,
      arrow: downarrow,
      adults: 1,
      children: 0,
      infants: 0
    }
  }
  //TODO: setup + - button control, disable - if guest is 0, disable + if max guest.
  //overlay click control
  onClick(e) {
    console.log("guest box clicked")
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
  render() { //refractor consideration: separate the overlay from guest to an individul componenet
    return (
      <div id="res-guest-box">
        <div style={{color: "rgb(72, 72, 72)", fontSize: "12px", fontWeight: 600, marginBottom: `2px`}}>Guest</div>
        <div style={this.state.overlay? {borderBottom: `2px solid rgb(0, 132, 137)`}:null} onClick={this.onClick.bind(this)} id="res-guest-select">
          <span style={this.state.overlay?{backgroundColor: `#99ede6`}: null} id="res-guest-innertext">{this.state.guest < 2 ? `${this.state.guest} guest` : `${this.state.guest} guests`}</span>
          <img className={"res-guest-arrow"} src={this.state.arrow}/>
        </div>
        {this.state.overlay ? 
        <div id="res-guest-overlay">
          <div id="res-guest-overlay-inner">
            <div id="res-guest-overlay-adults">
              <div className={"res-guest-overlay-button-group"}>
                <button className={"res-guest-overlay-button"}>-</button>
                <span className={"res-guest-overlay-quantity"}>1</span>
                <button className={"res-guest-overlay-button"}>+</button>
              </div>
              <div style={{lineHeight: `35px`}}>Adults</div>
            </div>
            <div id="res-guest-overlay-children">
              <div className={"res-guest-overlay-button-group-44"}>
                <button className={"res-guest-overlay-button"}>-</button>
                <span className={"res-guest-overlay-quantity"}>0</span>
                <button className={"res-guest-overlay-button"}>+</button>
              </div>
              <div style={{fontSize: `16px`, fontWeight: `600`, width: `60px`}}>Children</div>
              <div style={{fontSize: `14px`, fontWeight: `400`, width: `70px`, marginTop: `5px`}}>Ages 2–12</div>
            </div>
            <div id="res-guest-overlay-infants">
              <div className={"res-guest-overlay-button-group-44"}>
                <button className={"res-guest-overlay-button"}>-</button>
                <span className={"res-guest-overlay-quantity"}>0</span>
                <button className={"res-guest-overlay-button"}>+</button>
              </div>
              <div style={{fontSize: `16px`, fontWeight: `600`, width: `55px`}}>Infants</div>
              <div style={{fontSize: `14px`, fontWeight: `400`, width: `55px`, marginTop: `5px`}}>Under 2</div>
            </div>
            <div id="res-guest-overlay-info">4 guests maximum. Infants don’t count toward the number of guests.</div>
            <div id="res-guest-overlay-close">Close</div>
          </div>
        </div>
        : null}
      </div>
    )
  }
}

export default Guest;