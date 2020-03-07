import React, {useState} from 'react';

import axios from 'axios';

 const SmurfForm= () => {

    const [smurfs, setSmurfs]= useState({
        name: '',
        age: null,
        height: '',

    })

    const handleChanges= evt => {
        console.log(evt.target.value)
        setSmurfs({
            ...smurfs,
            [evt.target.name] : evt.target.value
        })
    }

    const submitHandler= evt =>{
        evt.preventDefault();

        setSmurfs({
            name: '',
            age: null,
            height: '',
        })

        axios
        .post('http://localhost:3333/smurfs', smurfs)
        .then(res => {
            console.log('Success', res);
            setSmurfs(res.data)
        })
        .catch(err => {
            console.log('Error: ', err.response);
        });

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                   onChange={handleChanges}
                   type="text"
                   name="name"
                   placeholder='enter smurf name'
                   value={smurfs.name}  
                />
                <input
                   onChange={handleChanges}
                   type="number"
                   name="age"
                   placeholder='enter smurf age'
                   value={smurfs.age}  
                />
                <input
                    onChange={handleChanges}
                    type="text"
                    name="height"
                    placeholder='enter smurf height'
                    value={smurfs.height} 
                />
                <button type='submit' >submit</button>
            </form>
        </div>
    )
}

export default SmurfForm;