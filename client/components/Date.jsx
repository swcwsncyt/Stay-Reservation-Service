import React from 'react';
import arrow from '../img/arrow.png';
import Calendar from './Calendar.jsx';
import pointer from '../img/pointer.png';
import moment from 'moment';

class Date extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overlay: false,
      startOverlay: false,
      endOverlay: false,
      start: "Check-in",
      end: "Checkout",
      pointerStyle: {},
      currentMonth: moment().format("MM"),
      currentYear: moment().format("YYYY"),
      calendar: {month: moment().format("MM"), year: moment().format("YYYY")}
    }
  }
  onClickStart(e) {
    this.setState({
      overlay: true,
      pointerStyle: {},
      startOverlay: true,
      endOverlay: false,
    })
  }
  onClickEnd(e) {
    this.setState({
      overlay: true,
      pointerStyle: {marginLeft: "200px"},
      startOverlay: false,
      endOverlay: true
    })
  }
  hideAll () { //temporary function to hide the panel for testing
    this.setState({
      overlay: false,
      startOverlay: false,
      endOverlay: false
    })
  }
  onClickNext () {
    var currentMonth = Number(this.state.currentMonth);
    var currentYear = Number(this.state.currentYear);
    if (this.state.currentMonth !== "12") {
      this.setState({
        currentMonth: (currentMonth + 1).toString(),
        calendar: {month: (currentMonth + 1).toString(), year: currentYear.toString()}
      })
    } else {
      var nextYear = (currentYear + 1);
      this.setState({
        currentMonth: "1",
        currentYear: nextYear.toString(),
        calendar: {month: "1", year: nextYear.toString()}
      })
    }
  }
  onClickPrev () {
    var currentMonth = Number(this.state.currentMonth);
    var currentYear = Number(this.state.currentYear);
    if (this.state.currentMonth !== "1") {
      this.setState({
        currentMonth: (currentMonth - 1).toString(),
        calendar: {month: (currentMonth - 1).toString(), year: currentYear.toString()}
      })
    } else {
      var prevYear = (currentYear - 1);
      this.setState({
        currentMonth: "12",
        currentYear: prevYear.toString(),
        calendar: {month: "12", year: prevYear.toString()}
      })
    }
  }
  getClickedDate(date) {
    this.setState({
      start: date
    })
  }
  render() {
    return (
      <div id="res-date-select-box">
        <div style={{color: "rgb(72, 72, 72)", fontSize: "12px", fontWeight: 600, marginBottom: "2px"}}>Date</div>
        <div id="res-date-group">
          <div className="res-date-input" onClick={this.onClickStart.bind(this)}>
            <span style={this.state.startOverlay?{backgroundColor: `#99ede6`, borderRadius: "3px"}: null}>{this.state.start}</span>
          </div>
          <div onClick={this.hideAll.bind(this)} style={{float: "left"}}>
            <img style={{height: "38px"}} src={arrow}/>
          </div>
          <div className="res-date-input" onClick={this.onClickEnd.bind(this)}>
            <span style={this.state.endOverlay?{backgroundColor: `#99ede6`, borderRadius: "3px"}: null}>{this.state.end}</span>
          </div>
        </div>
        {this.state.overlay? 
        <div style={{height: "343px"}}>
          <div style={{height: "8px"}}>
            <img src={pointer} style={this.state.pointerStyle}id={"res-date-overlay-pointer"}/>
          </div>
          <div id="res-date-overlay-container">
            <button onClick={this.onClickPrev.bind(this)} className={"res-date-overlay-button"} style={{float: "left", marginLeft: "15px"}}>←</button>
            <button onClick={this.onClickNext.bind(this)} className={"res-date-overlay-button"} style={{float: "right", marginRight: "15px"}}>→</button>
            <div style={{marginTop: "20px", fontWeight: "bold"}}>{`${moment(`${this.state.currentMonth}`, 'MM').format('MMMM')} ${this.state.currentYear}`}</div>
            <table id="res-date-overlay-calendar">
              <thead>
                <tr style={{fontSize: "12px", textAlign: "center", color: "rgb(117, 117, 117)"}}>
                  <td className={"res-date-overlay-thtd"}>Su</td>
                  <td className={"res-date-overlay-thtd"}>Mo</td>
                  <td className={"res-date-overlay-thtd"}>Tu</td>
                  <td className={"res-date-overlay-thtd"}>We</td>
                  <td className={"res-date-overlay-thtd"}>Th</td>
                  <td className={"res-date-overlay-thtd"}>Fr</td>
                  <td className={"res-date-overlay-thtd"}>Sa</td>
                </tr>
              </thead>
            </table>
            <Calendar getClickedDate={this.getClickedDate.bind(this)} currentCal={this.state.calendar} booking={this.props.booking}/>
            <div style={{marginRight: "16px", marginTop: "16px", marginBottom: "16px"}}id="res-date-overlay-clear">Clear Dates</div>
          </div>
        </div>
        : null}
      </div>
    )
  }
}

export default Date;