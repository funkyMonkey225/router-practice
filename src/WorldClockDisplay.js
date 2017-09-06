import React, { Component } from 'react';
import WorldClock from './WorldClock.js'

class WorldClockDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        if (this.props.times.length !== 0 || this.props.times !== undefined) { 
            var clocks = Object.keys(this.props.times).map((city, i) => {
                var condition = (city === "Select a city");
                return condition ? null : <WorldClock 
                    place={city} 
                    timeZone={this.props.times[city]} 
                    key={i}
                    deleteHandler={this.props.deleteHandler} 
                />
            });
        }
        return (
            <div>
                {clocks}
            </div>
        );
    }
}

export default WorldClockDisplay;