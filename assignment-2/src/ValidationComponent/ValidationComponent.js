import React from 'react';

const validationComponent = props => {
    var message = null;
    if (props.length < 5)
        message = "Text too short";
    else if (props.length > 15)
        message = "Text too long";

    return (
        <div className="validationComponent">
            <p>{message}</p>
        </div>
    )
}

export default validationComponent;