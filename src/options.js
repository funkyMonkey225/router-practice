import React, { Component } from 'react';

const CreateOption = ({place}) =>  {
    var condition = (place === "Select a city");
    return condition ? <option value={place}>{place}</option> : <option value={place}>{place}</option>
}

class CityOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Select a city'
        }
    }

    render() {
        var options = Object.keys(this.props.cities).map((city, idx) => (
        <CreateOption
            place={city}
            key={idx}
            />
        ));
        return ( 
            <form>
                <select value={this.state.value} onChange={this.props.onCitySelect}>
                    {options}
                </select>
            </form>
        );
    }
}

export default CityOptions;