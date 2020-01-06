import React from 'react';
import Option from './Option';

const Feature = props => {
    return (
        <fieldset className="feature" key={props.key}>
            <legend className="feature__name">
                <h3>{props.name}</h3>
            </legend>
            {props.options.map(option => {
                let selected = props.selectedId === option.id ? true : false;
                return <Option selected={selected} option={option} updateFeature={() => props.updateFeature(props.featureIndex, option.id)} />
            })}
        </fieldset>
    );
}



export default Feature; 