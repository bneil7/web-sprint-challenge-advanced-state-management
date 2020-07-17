import React from 'react';

import { connect } from 'react-redux';

const SmurfCard = (props) => {
    return (
        <>
            <hr/>
            <p>Name: {props.smurf.name}</p>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <hr/>
        </>
    )
}

export default connect()(SmurfCard);