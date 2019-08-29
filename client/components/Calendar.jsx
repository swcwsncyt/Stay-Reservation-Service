import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const ResCalendar = styled.table`
  display: table;
  width: 292px;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
`
const ResCalendarWeek = styled.tr`
display: table-row;
height: 41px;
`
const ResCalendarDay = styled.td`
  display: table-cell;
  border: 1px solid rgb(235, 235, 235);
  color: black;
  font-size: 12px;
`
const ResCalendarDayCrossed = styled.td`
  display: table-cell;
  border: 1px solid rgb(235, 235, 235);
  color: rgb(235, 235, 235);
  font-size: 12px;
  text-decoration: line-through;
`


class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      today: moment().format("YYYYMMDD"),
      firstDayOfMonth: Number(moment([Number(this.props.currentCal.year), Number(this.props.currentCal.month) - 1]).startOf('month').format("e")),
      lastDayOfMonth: Number(moment([Number(this.props.currentCal.year), Number(this.props.currentCal.month) - 1]).endOf('month').format("DD")),
      calendarBoard: [],
      booking: this.props.booking,
      start: false,
      end: false
    };
    this.create = this.createCalendar.bind(this);
    this.enter = this.onMouseEnter.bind(this);
    this.leave = this.onMouseLeave.bind(this);
  }
  componentDidMount() {
    this.create(this.state.firstDayOfMonth, this.state.lastDayOfMonth);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentCal.month !== prevProps.currentCal.month){
      this.setState({
        today: moment().format("YYYYMMDD"),
        firstDayOfMonth: Number(moment([Number(this.props.currentCal.year), Number(this.props.currentCal.month) - 1]).startOf('month').format("e")),
        lastDayOfMonth: Number(moment([Number(this.props.currentCal.year), Number(this.props.currentCal.month) - 1]).endOf('month').format("DD"))
      })
      this.create(Number(moment([Number(this.props.currentCal.year), Number(this.props.currentCal.month) - 1]).startOf('month').format("e")), Number(moment([Number(this.props.currentCal.year), Number(this.props.currentCal.month) - 1]).endOf('month').format("DD")));
    }
  }
  createCalendar(firstDayOfMonth, lastDayOfMonth) {
    var board = [];
    var day = 1;
    var week = Math.ceil((lastDayOfMonth - (7 - firstDayOfMonth)) / 7) + 1;
    for (var r = 0; r < week; r++) {
      var row = [];
      for (var d = 0; d < 7; d++) {
        if (day === lastDayOfMonth + 1) {
          board.push(row);
          this.setState({
            calendarBoard: board
          })
          return;
        }
        if (r === 0 && firstDayOfMonth > 0 && row.length === 0) {
          for (var h = 0; h < firstDayOfMonth; h++) {
            row.push(0);
          }
          d += firstDayOfMonth
        }
        row.push(day);
        day++;
      }
      board.push(row);
      if(day === lastDayOfMonth + 1){
        this.setState({
          calendarBoard: board
        })
      }
    }
  }
  onMouseEnter(e) {
    e.currentTarget.style.backgroundColor = "rgb(235, 235, 235)";
  }
  onMouseLeave(e) {
    e.currentTarget.style.backgroundColor = "";
  }
  onClick(e) {
    console.log(e.currentTarget.parentNode.children)
    e.currentTarget.style.backgroundColor = "rgb(0, 166, 153)";
    e.currentTarget.style.color = "white";
    this.props.getClickedDate(`${this.props.currentCal.year}/${this.props.currentCal.month}/${e.currentTarget.innerText}`)
  }
  render() {
    return (
      <ResCalendar>
        <tbody>
          {this.state.calendarBoard.map((row) => {
            return <ResCalendarWeek>
              {row.map((td) => {
                if (td === 0) {
                  return <td></td>
                } else {
                  if (Number(this.props.currentCal.year) < Number(this.state.today.slice(0, 4))) {
                    return <ResCalendarDayCrossed>{td}</ResCalendarDayCrossed>
                  } else if (Number(this.props.currentCal.year) === Number(this.state.today.slice(0, 4))) {
                    if (Number(this.props.currentCal.month) < Number(this.state.today.slice(4, 6))) {
                      return <ResCalendarDayCrossed>{td}</ResCalendarDayCrossed>
                    } else if (Number(this.props.currentCal.month) === Number(this.state.today.slice(4, 6))) {
                      if (td < Number(this.state.today.slice(6, 8))){
                        return <ResCalendarDayCrossed>{td}</ResCalendarDayCrossed>
                      }
                    }
                  }
                  for (var i = 0; i < this.props.booking.length; i++) {
                    var bookYear = this.props.booking[i].date.slice(0, 4);
                    var bookMonth = this.props.booking[i].date.slice(5, 7);
                    var bookDate = Number(this.props.booking[i].date.slice(8, 10));
                    if (bookYear === this.props.currentCal.year && bookMonth === this.props.currentCal.month && td === bookDate) {
                      return <ResCalendarDayCrossed>{td}</ResCalendarDayCrossed>
                    } else {
                      if (i === this.props.booking.length - 1) {
                        return <ResCalendarDay onClick={this.onClick.bind(this)} onMouseEnter={this.enter} onMouseLeave={this.leave}>{td}</ResCalendarDay>
                      }
                    }
                  }
                }
              })}
            </ResCalendarWeek>
          })}
        </tbody>
      </ResCalendar>
    )
  }
}

export default Calendar;