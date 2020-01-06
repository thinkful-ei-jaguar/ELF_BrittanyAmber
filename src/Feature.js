import React from 'react';

const Feature = props => {
    return (
        <fieldset className="feature" key={}>
            <legend className="feature__name">
                <h3>{props.name}</h3>
            </legend>
            {props.options.map(option => {
                return <Option name={option.name} cost={option.cost} />
            })}
        </fieldset>
    );
}



export default Feature; 