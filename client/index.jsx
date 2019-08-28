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
        float: "right",
        marginRight: "150px",
        marginTop: "52px",
        listing: {},
        booking: []
      }
    }
    this.initialData = this.getInitialData.bind(this);
  }
  componentDidMount() {
    this.initialData();
    window.addEventListener('scroll', this.onScroll.bind(this));
  }
  getInitialData() {
    axios.post('/api/reservation/search', {id: 1})
    .then((res) => {
      this.setState({
        listing: res.data.listing[0],
        booking: res.data.booking
      })
    })
  }
  onScroll(e) {
    if (e.target.scrollingElement.scrollTop > 527 && e.target.scrollingElement.scrollTop < 1688) {
      this.setState({
        resStyle: {
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
          float: "right",
          marginRight: "150px",
          marginTop: "52px"
        }
      })
    }
    if (e.target.scrollingElement.scrollTop > 1688) {
      this.setState({
        resStyle: {
          float: "right",
          marginRight: "150px",
          marginTop: "1220px"
        }
      })
    }
  }
  onSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div style={this.state.resStyle} id="res-module">
        <div id="res-inner">
          <RoomDetails details={this.state.listing}/>
          <div id="res-line"></div>
          <form onSubmit={this.onSubmit.bind(this)} id="res-form">
            <Date booking={this.state.booking}/>
            <Guest details={this.state.listing}/>
            <Total details={this.state.listing}/>
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