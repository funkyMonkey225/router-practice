import React, { Component } from 'react';

class WorldClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {timeZone: this.props.timeZone, timeZoneName: 'short'},
      currentTime: new Date(),
      clockFace: 'normal',
      digital: false,
      color: 'yellow'
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
        this._updateTime(1000)
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _updateTime = (timeDifference) => {
    const newTime = new Date(this.state.currentTime.getTime() + timeDifference);
    this.setState({
      currentTime: newTime
    });
  }

  _updateLookAndFeel = (isDigital, newColor) => {
    // isDigital = true;
    // newColor = 'cornflowerblue';
    this.setState({
      digital: isDigital,
      color: newColor
    });
  }

  render() {
      return (
        <div>
            <h2>{this.props.place}</h2>
            <p>{this.state.currentTime.toLocaleTimeString('en-US', this.state.options)}</p>
            <a className="options" href="" onClick={(event) => {
                event.preventDefault();
                this.props.deleteHandler(this.props.place);
                }}>Delete</a>
            {/*<a className="options" href="" onClick={(event) => {
                event.preventDefault();
                console.log("hi");
                }}>Customize</a>*/}
        </div>
      );
  }

}

export default WorldClock;