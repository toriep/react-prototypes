import React from 'react';

export default (props) =>  {
    console.log(props);
    return(
        <div className="form-group">
            <label>{props.label}</label>
            <input className="form-control" type="text" {...props} />
        </div>
    )
};
