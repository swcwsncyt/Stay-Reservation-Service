import React from 'react';
import moment from 'moment';

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
  font-weight: 600;
  :hover {
    background-color: rgb(235, 235, 235);
  }
`
const ResCalendarDayCrossed = styled.td`
  display: table-cell;
  border: 1px solid rgb(235, 235, 235);
  color: rgb(235, 235, 235);
  font-size: 12px;
  font-weight: 600;
  text-decoration: line-through;
`
const ResCalendarSelected = styled.td`
  display: table-cell;
  border: 1px solid rgb(0, 166, 153);
  background-color: rgb(0, 166, 153);
  font-size: 12px;
  font-weight: 600;
  color: white;
`
const ResCalendarSelection = styled.td`
  display: table-cell;
  border: 1px solid rgb(128, 232, 224);
  background-color: rgb(178, 241, 236);
  font-size: 12px;
  font-weight: 600;
  color: white;
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
      end: false,
      startDate: null,
      endDate: null,
      pointedDate: ""
    };
    this.create = this.createCalendar.bind(this);
    this.enter = this.onMouseEnter.bind(this);
    this.leave = this.onMouseLeave.bind(this);
  }
  componentDidMount() {
    if (Object.keys(this.props.state).length) {
      this.setState({
        start: this.props.state.start,
        end: this.props.state.end,
        startDate: this.props.state.startDate,
        endDate: this.props.state.endDate,
        startToEnd: this.props.state.startToEnd
      })
    }
    this.create(this.state.firstDayOfMonth, this.state.lastDayOfMonth);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.setState({
        firstDayOfMonth: Number(moment([Number(this.props.currentCal.year), Number(this.props.currentCal.month) - 1]).startOf('month').format("e")),
        lastDayOfMonth: Number(moment([Number(this.props.currentCal.year), Number(this.props.currentCal.month) - 1]).endOf('month').format("DD"))
      }, ()=>{
        this.create(Number(moment([Number(this.props.currentCal.year), Number(this.props.currentCal.month) - 1]).startOf('month').format("e")), Number(moment([Number(this.props.currentCal.year), Number(this.props.currentCal.month) - 1]).endOf('month').format("DD")));
      })
    }
    if (this.props.clear) {
      this.setState({
        calendarBoard: [],
        booking: this.props.booking,
        start: false,
        end: false,
        startDate: null,
        endDate: null,
        pointedDate: ""
      }, 
      () => {
        this.props.reset();
      })
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
    var calYear = this.props.currentCal.year;
    var calMonth = this.props.currentCal.month.length === 1 ? `0${this.props.currentCal.month}`: this.props.currentCal.month;
    var day = e.currentTarget.innerText.length === 1 ? `0${e.currentTarget.innerText}`:e.currentTarget.innerText;
    this.setState({
      pointedDate: `${calYear}${calMonth}${day}`
    })
  }
  onMouseLeave(e) {
    this.setState({
      pointedDate: ""
    })
  }
  onClick(e) {
    if (this.state.start && !this.state.end) {
      this.setState({//end
        start: false,
        end: true,
        today: moment().format("YYYYMMDD"),
        endDate: `${this.props.currentCal.year}${this.props.currentCal.month.length === 1 ?"0" + this.props.currentCal.month: this.props.currentCal.month}${e.currentTarget.innerText.length === 1? "0" + e.currentTarget.innerText: e.currentTarget.innerText}`
      }, () => {
        this.props.getClickedDate(this.state)
      })
    } else {
      this.setState({//start
        start: true,
        end: false,
        today: `${this.props.currentCal.year}${this.props.currentCal.month.length === 1 ?"0" + this.props.currentCal.month: this.props.currentCal.month}${e.currentTarget.innerText.length === 1? "0" + e.currentTarget.innerText: e.currentTarget.innerText}`,
        startDate: `${this.props.currentCal.year}${this.props.currentCal.month.length === 1 ?"0" + this.props.currentCal.month: this.props.currentCal.month}${e.currentTarget.innerText.length === 1? "0" + e.currentTarget.innerText: e.currentTarget.innerText}`,
        endDate: null
      }, () => {
        this.props.getClickedDate(this.state)
      })
    }
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
                } else { //cross out date before today or start date, if start date is specify
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
                  } //cross out booked date
                  for (var i = 0; i < this.props.booking.length; i++) {
                    var bookYear = this.props.booking[i].date.slice(0, 4);
                    var bookMonth = this.props.booking[i].date.slice(5, 7);
                    var bookDate = Number(this.props.booking[i].date.slice(8, 10));
                    if (bookYear === this.props.currentCal.year && bookMonth === this.props.currentCal.month && td === bookDate) {
                      return <ResCalendarDayCrossed>{td}</ResCalendarDayCrossed>
                    } 
                  }
                  if (this.state.start && !this.state.end ) {
                    if (`${this.props.currentCal.year}${this.props.currentCal.month.length === 1?"0"+this.props.currentCal.month:this.props.currentCal.month}${td < 10?"0"+td:td}` === this.state.startDate) {
                      return <ResCalendarSelected>{td}</ResCalendarSelected>
                    } else {
                      if (Number(this.state.startDate.slice(0, 4)) === Number(this.state.pointedDate.slice(0, 4))) {
                        if (Number(this.state.startDate.slice(4, 6)) === Number(this.state.pointedDate.slice(4, 6))) {
                          if (td <= Number(this.state.pointedDate.slice(6,8))) {
                            return <ResCalendarSelection onMouseEnter={this.enter} onMouseLeave={this.leave} onClick={this.onClick.bind(this)}>{td}</ResCalendarSelection>
                          }
                        }
                      }
                      return <ResCalendarDay onMouseEnter={this.enter} onMouseLeave={this.leave} onClick={this.onClick.bind(this)}>{td}</ResCalendarDay>
                    }
                  } else {
                    if (!this.state.start && this.state.end) {
                      if (Number(this.props.currentCal.year) >= Number(this.state.startDate.slice(0,4)) && Number(this.props.currentCal.year) <= Number(this.state.endDate.slice(0,4))) {
                        if (Number(this.props.currentCal.month) >= Number(this.state.startDate.slice(4,6)) && Number(this.props.currentCal.month) <= Number(this.state.endDate.slice(4,6))) {
                          if (td >= Number(this.state.startDate.slice(6,8)) && td <= Number(this.state.endDate.slice(6,8))) {
                            return <ResCalendarSelected onClick={this.onClick.bind(this)}>{td}</ResCalendarSelected>
                          }
                        }
                      }
                    }
                    return <ResCalendarDay onMouseEnter={this.state.start?this.enter:null} onClick={this.onClick.bind(this)}>{td}</ResCalendarDay>
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