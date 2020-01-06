import React from 'react';

const Option = props => {
    // This object will allow us to
    // easily convert numbers into US dollar values
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <div key={} className="feature__item">
            <input
                type="radio"
                id={}
                className="feature__option"
                name={}
                checked={}
                onChange={e => props.updateFeature()}
            />
            <label htmlFor={itemHash} className="feature__label">
                {props.name} ({USCurrencyFormat.format(props.cost)})
            </label>
        </div>
    );
}

export default Option; 