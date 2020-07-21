import React from 'react';

import { connect } from 'react-redux';

const SmurfCard = (props) => {
    return (
        <div className="card">
            <p>Name: {props.smurf.name}</p>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    )
}

export default connect()(SmurfCard);