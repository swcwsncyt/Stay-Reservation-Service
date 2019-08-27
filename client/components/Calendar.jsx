import React from 'react';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <table id="res-calendar">
        <tbody >
          <tr className={"res-calendar-week"}>
            <td className={"res-calendar-day-hide"}></td>
            <td className={"res-calendar-day-hide"}></td>
            <td className={"res-calendar-day-hide"}></td>
            <td className={"res-calendar-day-hide"}></td>
            <td className={"res-calendar-day"}>1</td>
            <td className={"res-calendar-day"}>2</td>
            <td className={"res-calendar-day"}>3</td>
          </tr>
          <tr className={"res-calendar-week"}>
            <td className={"res-calendar-day"}>4</td>
            <td className={"res-calendar-day"}>5</td>
            <td className={"res-calendar-day"}>6</td>
            <td className={"res-calendar-day"}>7</td>
            <td className={"res-calendar-day"}>8</td>
            <td className={"res-calendar-day"}>9</td>
            <td className={"res-calendar-day"}>10</td>
          </tr>
          <tr className={"res-calendar-week"}>
            <td className={"res-calendar-day"}>11</td>
            <td className={"res-calendar-day"}>12</td>
            <td className={"res-calendar-day"}>13</td>
            <td className={"res-calendar-day"}>14</td>
            <td className={"res-calendar-day"}>15</td>
            <td className={"res-calendar-day"}>16</td>
            <td className={"res-calendar-day"}>17</td>
          </tr>
          <tr className={"res-calendar-week"}>
            <td className={"res-calendar-day"}>18</td>
            <td className={"res-calendar-day"}>19</td>
            <td className={"res-calendar-day"}>20</td>
            <td className={"res-calendar-day"}>21</td>
            <td className={"res-calendar-day"}>22</td>
            <td className={"res-calendar-day"}>23</td>
            <td className={"res-calendar-day"}>24</td>
          </tr>
          <tr className={"res-calendar-week"}>
            <td className={"res-calendar-day"}>25</td>
            <td className={"res-calendar-day"}>26</td>
            <td className={"res-calendar-day"}>27</td>
            <td className={"res-calendar-day"}>28</td>
            <td className={"res-calendar-day"}>29</td>
            <td className={"res-calendar-day"}>30</td>
            <td className={"res-calendar-day"}>31</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Calendar;