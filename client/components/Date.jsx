import React from 'react';
import arrow from '../img/arrow.png';
import Calendar from './Calendar.jsx';
import pointer from '../img/pointer.png';

class Date extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overlay: false,
      start: "Check-in",
      end: "Checkout",
      pointerStyle: {}
    }
  }
  onClickStart(e) {
    if(!this.state.overlay){
      this.setState({
        overlay: !this.state.overlay,
        pointerStyle: {}
      })
    }
  }
  onClickEnd(e) {
    if(!this.state.overlay){
      this.setState({
        overlay: !this.state.overlay,
        pointerStyle: {marginLeft: "150px"}
      })
    }
  }
  hideAll () { //temporary function to hide the panel for testing
    this.setState({
      overlay: false
    })
  }
  onHover() {
    
  }
  render() {
    return (
      <div id="res-date-select-box">
        <div style={{color: "rgb(72, 72, 72)", fontSize: "12px", fontWeight: 600, marginBottom: "2px"}}>Date</div>
        <div id="res-date-group">
          <div className="res-date-input" onClick={this.onClickStart.bind(this)}>08/31/2019</div>
          <div onClick={this.hideAll.bind(this)} style={{float: "left"}}><img style={{height: "38px"}} src={arrow}/></div>
          <div className="res-date-input" onClick={this.onClickEnd.bind(this)}>09/07/2019</div>
        </div>
        {this.state.overlay? 
        <div style={{height: "343px"}}>
          <div style={{height: "8px"}}>
            <img src={pointer} style={this.state.pointerStyle}id={"res-date-overlay-pointer"}/>
          </div>
          <div id="res-date-overlay-container">
            <button className={"res-date-overlay-button"} style={{float: "left", marginLeft: "15px"}}>←</button>
            <button className={"res-date-overlay-button"} style={{float: "right", marginRight: "15px"}}>→</button>
            <div style={{marginTop: "20px", fontWeight: "bold"}}>August 2019</div>
            <table id="res-date-overlay-calendar">
              <thead>
                <tr style={{fontSize: "12px", textAlign: "center", color: "rgb(117, 117, 117)"}}>
                  <td className={"res-date-over-lay-thtd"}>Su</td>
                  <td className={"res-date-over-lay-thtd"}>Mo</td>
                  <td className={"res-date-over-lay-thtd"}>Tu</td>
                  <td className={"res-date-over-lay-thtd"}>We</td>
                  <td className={"res-date-over-lay-thtd"}>Th</td>
                  <td className={"res-date-over-lay-thtd"}>Fr</td>
                  <td className={"res-date-over-lay-thtd"}>Sa</td>
                </tr>
              </thead>
            </table>
            <Calendar />
            <div style={{marginRight: "16px"}}id="res-date-overlay-clear">Clear Dates</div>
          </div>
        </div>
        : null}
      </div>
    )
  }
}

export default Date;