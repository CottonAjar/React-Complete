import React from 'react';
import './CharComponent.css';

const CharComponent = props => {
    var text = props.text;

    return (
        <div className="CharComponent">
            {text}
        </div>
    );
}

export default CharComponent;