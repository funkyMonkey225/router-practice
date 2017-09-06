import React, { Component } from 'react';


class Numbers extends Component {
    constructor(props) {
        super(props);
    }

    _negPosHandler = (e) => {
        this.props.negPosHandler(e.target.innerText);
    }

    _backHandler = (e) => {
        this.props.backHandler(e.target.innerText);
    }
    _resultHandler = (e) => {
        this.props.resultHandler(e.target.innerText);
    }

    _clearHandler = (e) => {
        this.props.clearHandler(e.target.innerText);
    }

    _numberOperationHandler = (e) => {
        this.props.numberHandler(e.target.innerText);
    }

  render() {
    return (
        <tbody>
            <tr>
                <td className="numbers" onClick={this._clearHandler}>clr</td>
                <td className="numbers" onClick={this._negPosHandler}>+/-</td>
                <td className="numbers" onClick={this._backHandler}><img className="back-arrow" src="back.png" alt="back" /></td>
                <td className="operators" onClick={this._numberOperationHandler}>/</td>
            </tr>
            <tr>
                <td className="numbers" onClick={this._numberOperationHandler}>7</td>
                <td className="numbers" onClick={this._numberOperationHandler}>8</td>
                <td className="numbers" onClick={this._numberOperationHandler}>9</td>
                <td className="operators" onClick={this._numberOperationHandler}>x</td>
            </tr>
            <tr>
                <td className="numbers" onClick={this._numberOperationHandler}>4</td>
                <td className="numbers" onClick={this._numberOperationHandler}>5</td>
                <td className="numbers" onClick={this._numberOperationHandler}>6</td>
                <td className="operators" onClick={this._numberOperationHandler}>-</td>
            </tr>
            <tr>
                <td className="numbers" onClick={this._numberOperationHandler}>1</td>
                <td className="numbers" onClick={this._numberOperationHandler}>2</td>
                <td className="numbers" onClick={this._numberOperationHandler}>3</td>
                <td className="operators" onClick={this._numberOperationHandler}>+</td>
            </tr>
            <tr>
                <td className="numbers" colSpan="2" onClick={this._numberOperationHandler}>0</td>
                <td className="numbers" onClick={this._numberOperationHandler}>.</td>
                <td className="operators" onClick={this._resultHandler}>=</td>
            </tr>
        </tbody>
    );
  }
}

export default Numbers;