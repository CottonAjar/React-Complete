import React from 'react';
import './CharComponent.css';

const CharComponent = props => {
    var text = props.text;

    return (
        <div className="CharComponent" onClick={props.click}>
            {text}
        </div>
    );
}

export default CharComponent;