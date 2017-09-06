import React from 'react';

const Display = ({display}) => {
    return (<thead><tr><td className="calcdisplay" colSpan="4">{display}</td></tr></thead>)
}

export default Display;