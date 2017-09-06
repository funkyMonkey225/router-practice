import React, { Component } from 'react';
import './App.css';
import MartaDashboard from "./MartaDashboard.js";
import UserFilter from "./UserFilter.js";

class Marta extends Component {
    constructor(props) {
    super(props);
    this.state = {
      filterDest: "Select a destination",
      filterDir: "Select a direction",
      filterStat: "Select a station",
      filterLine: "Select a line"
    };
}

    _handleDestInput = (dest) => {
        this.setState({
            filterDest: dest
        })
    }

    _handleDirInput = (dir) => {
        this.setState({
            filterDir: dir
        })
    }

    _handleLineInput = (line) => {
        this.setState({
            filterLine: line
        })
    }

    _handleStatInput = (stat) => {
        this.setState({
            filterStat: stat
        })
    }
    render() {
        const {filterDest, filterDir, filterStat, filterLine} = this.state
    return (
      <div className="marta">
          <h1>Welcome to Martaaaaagghhhh</h1>
          <img src="marta-train-map.jpg" alt="Marta train map"/>
          <p>Please select your preferences to filter the information.</p>
          <UserFilter 
            destHandler={this._handleDestInput}
            dirHandler={this._handleDirInput}
            statHandler={this._handleStatInput}
            lineHandler={this._handleLineInput}
          />
          <br />
          <MartaDashboard 
            filterDest={filterDest}
            filterDir={filterDir}
            filterStat={filterStat}
            filterLine={filterLine}
          />
      </div>
    );
  }
}

export default Marta;