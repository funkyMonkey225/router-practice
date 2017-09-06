import React, { Component } from 'react';
import Display from "./Display.js";
import Numbers from "./Numbers.js";
import utils from './utils.js';


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            current: "0",
            display: "0"
        }
    }

    _backHandler = (value) => {
        var {display, current, total} = this.state;
        if (display[display.length -1] === " ") {
            display = display.slice(0, -3);
            current = current.slice(0, -3);
        } else {
            display = display.slice(0, -1);
            current = current.slice(0, -1);
            let arr = current.split(" ");
            if (arr.length === 1) {
                total = Number(display);
            }
        }

        if (display === "") {
            total = 0;
            display = "0";
            current = "0"
        }

        this.setState ({
            display: display,
            current: current,
            total: total
        })
    }

    _resultHandler = (value) => {
        var {display, total, current} = this.state;
        total = utils.operation(current, total);
        current = String(total);
        display = String(total);
        this.setState ({
            total: total,
            current: current,
            display: display
        })
    }

    _negPosHandler = (value) => {
        var {display, total, current} = this.state;
        let arr = display.split(' ');
        let currarr = current.split(' ');
        let num = Number(arr[arr.length - 1]);
        let elem = arr[arr.length - 1];
        if (elem !== "" && !(isNaN(num))) {
            if (num < 0) {
                num = Math.abs(num);

            } else if (num > 0) {
                num = -num;
            }

            currarr[currarr.length - 1] = num;
            arr[arr.length - 1] = num;
            current = currarr.join(' ');
            display = arr.join(' ');

            if (arr.length === 1) {
                total = num;
            }

        } else {
            if (elem === "-") {
                display = display.slice(0, -1);
                current = current.slice(0, -1);
            } else {
                display = display + "-";
                current = current + "-";
            }       
        }

        this.setState({
            display: display,
            current: current,
            total: total
        })
    }

    _clearHandler = (value) => {
        this.setState({
            display: "0",
            current: "",
            total: 0
        })
    }

    _numberOperationHandler = (val) => {
        var {display, current, total} = this.state;
        if ((display === "0" || display === "Infinity") && val !== "x" && val !== "-" && val !== "/" && val !== "+") {
            current = val;
            total = Number(val);
            display = val;
        } else if (val === "x" || val === "-" || val === "/" || val === "+") {
            if (display[display.length - 1] !== " ") {
                var disparr = display.split(' ');
                total = utils.operation(current, total);
                current = String(total);
                if (disparr.length >= 3) {
                    display = String(total);
                }
                current = current + " " + val + " ";
                display = display + " " + val + " "; 
            }
        } else {
            current = current + val;
            display = display + val;
        }

        this.setState({
            current: current,
            display: display,
            total: total
        })
    }

  render() {
    return (
        <div>
            <h1>Realculator!</h1>
            <p>React + Calculator</p>
            <p>Calculate the things!</p>
            <table className="calculator">
                <Display display={this.state.display}/>
                <Numbers 
                    numberHandler={this._numberOperationHandler}
                    clearHandler={this._clearHandler}
                    resultHandler={this._resultHandler}
                    backHandler={this._backHandler}
                    negPosHandler={this._negPosHandler}
                />
            </table>
        </div>
    );
  }
}

export default Calculator;