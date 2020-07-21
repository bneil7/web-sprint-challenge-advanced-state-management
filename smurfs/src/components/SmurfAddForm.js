import React, { useState } from 'react';
import { postSmurf }  from '../store/actions';
import { connect } from 'react-redux';

const SmurfAddForm = (props) => {

    const [formData, setFormData] = useState({});
    
    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    function addSmurf(e) {
        e.preventDefault();
        props.postSmurf(formData)
    }

    return (
        <div className="form">
        <form onSubmit={(e) => addSmurf(e)}>
            <input
                name='name'
                type='text'
                placeholder='add Smurf name'
                value={props.value}
                onChange={handleChange}
            />
            <br/>
            <input
                name='age'
                type='number'
                placeholder='add Smurf age'
                value={props.value}
                onChange={handleChange}
            />
            <br/>
            <input
                name='height'
                type='text'
                placeholder='add Smurf height'
                value={props.value}
                onChange={handleChange}
            />
            <br/>
            <button type='submit'>ADD</button>
        </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        formData: {
            name: state.name,
            age: state.age,
            height: state.height
        },
        isPosting: state.isPosting,
        smurfs: state.smurfs,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {postSmurf}
)(SmurfAddForm);