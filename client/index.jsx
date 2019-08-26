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
      resStyle: {
        width: "376px",
        height: "546px",
        border: "1px rgb(228, 228, 228) solid",
        float: "right",
        marginRight: "150px",
        marginTop: "52px"
      }
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }
  onScroll(e) {
    if (e.target.scrollingElement.scrollTop > 527 && e.target.scrollingElement.scrollTop < 1660) {
      this.setState({
        resStyle: {
          width: "376px",
          height: "546px",
          border: "1px rgb(228, 228, 228) solid",
          right: "158px",
          position: "fixed",
          top: "0px",
          marginTop: "52px"
        }
      })
    }
    if (e.target.scrollingElement.scrollTop < 527) {
      this.setState({
        resStyle: {
          width: "376px",
          height: "546px",
          border: "1px rgb(228, 228, 228) solid",
          float: "right",
          marginRight: "150px",
          marginTop: "52px"
        }
      })
    }
    if (e.target.scrollingElement.scrollTop > 1660) {
      this.setState({
        resStyle: {
          width: "376px",
          height: "546px",
          border: "1px rgb(228, 228, 228) solid",
          float: "right",
          marginRight: "150px",
          marginTop: "1176px"
        }
      })
    }
    console.log(e); //340
  }

  render() {
    return (
      <div style={this.state.resStyle} id="res-module">
        <div id="res-inner">
          <RoomDetails />
          <div id="res-line"></div>
          <form id="res-form">
            <Date />
            <Guest />
            <Total />
            <Reserve />
            <div id="res-charge-statement">You won’t be charged yet</div>
          </form>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("res"))

export default App;