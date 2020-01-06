import React from 'react';

const Selected = props => {
    return (
        <div className="summary__option" key={}>
            <div className="summary__option__label">{feature.name} </div>
            <div className="summary__option__value">{feature.selected}</div>
            <div className="summary__option__cost">
                {USCurrencyFormat.format(selectedOption.cost)}
            </div>
        </div>
    );
}

export default Selected; 