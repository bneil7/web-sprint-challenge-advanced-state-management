import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurf } from '../store/actions';
import SmurfCard from './SmurfCard';

const SmurfList = (props) => {
    useEffect(() => {
        // call the action creator
        props.fetchSmurf();
    }, []);

    return (
        <div className="list">
            {props.isLoading && <h4>LOADING SMURF...</h4>}
            {props.error && (
                <p className="error">SMURF NOT FOUND!{props.error}</p>
            )}
            {props.smurfs && props.smurfs.map(smurf => {
                return (
                    <SmurfCard key={smurf.id} smurf={smurf}/>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error
    };
};

export default connect(mapStateToProps, {fetchSmurf})(SmurfList);