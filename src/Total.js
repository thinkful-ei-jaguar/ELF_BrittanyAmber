import React from 'react';

const Total = props => {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <div className="summary__total">
            <div className="summary__total__label">{props.total}</div>
            <div className="summary__total__value">
                {USCurrencyFormat.format(props.total)}
            </div>
        </div>
    );
}

export default Total; 