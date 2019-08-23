import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RoomDetails from './components/RoomDetails.jsx';
import Date from './components/Date.jsx';
import Guest from './components/Guest.jsx';
import Total from './components/Total.jsx';
import Reserve from './components/ReserveBtn.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div id="inner-res">
        <RoomDetails />
        <div id="line"></div>
        <form id="res-form">
          <Date />
          <Guest />
          <Total />
          <Reserve />
          <div id="charge-statement">You won’t be charged yet</div>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("res"))

export default App;