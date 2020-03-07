import React from 'react'

export const SmurfInfo= ({smurf}) => {


    return (
        <div>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
        </div>
    )
}
