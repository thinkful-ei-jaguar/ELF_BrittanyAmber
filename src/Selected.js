import React from 'react';

const Selected = props => {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <div className="summary__option" key={props.key}>
            <div className="summary__option__label">{props.name} </div>
            <div className="summary__option__value">{props.selected}</div>
            <div className="summary__option__cost">
                {USCurrencyFormat.format(props.selected.price)}
            </div>
        </div>
    );
}

export default Selected; 