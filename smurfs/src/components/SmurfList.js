import React from 'react';
import Loader from 'react-loader-spinner';

import {connect} from 'react-redux';

import {getSmurf} from '../actions';

import {SmurfInfo} from './SmurfInfo';

const SmurfList= ({smurf, isFetching, error, getSmurf}) => {


    return (
        <div>
            <div className='fetch'>
                {!smurf && !isFetching && <button onClick={getSmurf}>Check Smurfs</button> }
            </div>

            {isFetching && 
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />}

            {smurf && !isFetching && (
                smurf.map(smurfer => {
                    return <SmurfInfo key={smurfer.id} smurf={smurfer} />
                })
            )}

        </div>
    )
}

const mapStateToProps= state => {
    return{
       smurf: state.smurf,
       isFetching: state.isFetching,
       error: state.error,
    }
}

export default connect(
    mapStateToProps,
    {getSmurf},
)(SmurfList);
