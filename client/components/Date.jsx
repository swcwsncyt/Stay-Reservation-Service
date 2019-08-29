import React from 'react';
import arrow from '../img/arrow.png';
import Calendar from './Calendar.jsx';
import pointer from '../img/pointer.png';
import moment from 'moment';
import styled from 'styled-components';

const ResDateSelectBox = styled.div`
  width: 326px;
  height: 64px;
  margin-bottom: 8px;
`
const ResDateInput = styled.div`
  float: left;
  width: 146px;
  height: 40px;
  line-height: 40px;
  text-indent: 15px;
`
const ResDateGroup = styled.div`
width: 326px;
height: 40px;
border: 1px solid rgb(235, 235, 235);
border-radius: 4px;
`
const ResDateOverlayContainer = styled.div`
  position: absolute;
  width: 332px;
  border: 1px solid rgb(235, 235, 235);
  border-radius: 4px;
  background-color: white;
  text-align: center;
`
const ResDateOverlayPointer = styled.img`
  height: 15px;
`
const ResDateOverlayBtn = styled.button`
  width: 36px;
  height: 30px;
  margin-top: 15px;
  background-color: white;
  border-color: rgb(235, 235, 235);
  color: rgb(130, 136, 138);
  font-size: 18px;
  border-radius: 3px;
`
const ResDateOverlayCalendar = styled.table`
  table-layout: fixed;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`
const ResDateOverlayCalendarHeading = styled.td`
  width: 40px;
  height: 20px;
`
const ResDateOverlayClear = styled.div`
  color: #008489;
  font-size: 14px;
  font-weight: 600;
  text-align: right;
  cursor: pointer;
`
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
      <ResDateSelectBox>
        <div style={{color: "rgb(72, 72, 72)", fontSize: "12px", fontWeight: 600, marginBottom: "2px"}}>Date</div>
        <ResDateGroup>
          <ResDateInput onClick={this.onClickStart.bind(this)}>
            <span style={this.state.startOverlay?{backgroundColor: `#99ede6`, borderRadius: "3px"}: null}>{this.state.start}</span>
          </ResDateInput>
          <div onClick={this.hideAll.bind(this)} style={{float: "left"}}>
            <img style={{height: "38px"}} src={arrow}/>
          </div>
          <ResDateInput onClick={this.onClickEnd.bind(this)}>
            <span style={this.state.endOverlay?{backgroundColor: `#99ede6`, borderRadius: "3px"}: null}>{this.state.end}</span>
          </ResDateInput>
        </ResDateGroup>
        {this.state.overlay? 
        <div style={{height: "343px"}}>
          <div style={{height: "8px"}}>
            <ResDateOverlayPointer src={pointer} style={this.state.pointerStyle}/>
          </div>
          <ResDateOverlayContainer>
            <ResDateOverlayBtn onClick={this.onClickPrev.bind(this)} style={{float: "left", marginLeft: "15px"}}>←</ResDateOverlayBtn>
            <ResDateOverlayBtn onClick={this.onClickNext.bind(this)} style={{float: "right", marginRight: "15px"}}>→</ResDateOverlayBtn>
            <div style={{marginTop: "20px", fontWeight: "bold"}}>{`${moment(`${this.state.currentMonth}`, 'MM').format('MMMM')} ${this.state.currentYear}`}</div>
            <ResDateOverlayCalendar>
              <thead>
                <tr style={{fontSize: "12px", textAlign: "center", color: "rgb(117, 117, 117)"}}>
                  <ResDateOverlayCalendarHeading>Su</ResDateOverlayCalendarHeading>
                  <ResDateOverlayCalendarHeading>Mo</ResDateOverlayCalendarHeading>
                  <ResDateOverlayCalendarHeading>Tu</ResDateOverlayCalendarHeading>
                  <ResDateOverlayCalendarHeading>We</ResDateOverlayCalendarHeading>
                  <ResDateOverlayCalendarHeading>Th</ResDateOverlayCalendarHeading>
                  <ResDateOverlayCalendarHeading>Fr</ResDateOverlayCalendarHeading>
                  <ResDateOverlayCalendarHeading>Sa</ResDateOverlayCalendarHeading>
                </tr>
              </thead>
            </ResDateOverlayCalendar>
            <Calendar getClickedDate={this.getClickedDate.bind(this)} currentCal={this.state.calendar} booking={this.props.booking}/>
            <ResDateOverlayClear style={{marginRight: "16px", marginTop: "16px", marginBottom: "16px"}}>Clear Dates</ResDateOverlayClear>
          </ResDateOverlayContainer>
        </div>
        : null}
      </ResDateSelectBox>
    )
  }
}

export default Date;