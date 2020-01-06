import React from 'react';
import Option from './Option';

const Feature = props => {
    return (
        <fieldset className="feature" key={props.key}>
            <legend className="feature__name">
                <h3>{props.name}</h3>
            </legend>
            {props.options.map(option => {
                return <Option option={option} updateFeature={() => props.updateFeature(props.featureIndex, option.id)} />
            })}
        </fieldset>
    );
}



export default Feature; 