import React from 'react';

const Option = props => {
    // This object will allow us to
    // easily convert numbers into US dollar values
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    // option object    // // {
    //     id: 8,
    //     description: '17th Generation Intel Core HB (7 Core with donut spare)',
    //     price: 400,
    //     selected: false
    //   }
    const { id, description, price, selected } = props.option;

    return (
        <div className="feature__item">
            <input
                type="radio"
                id={id}
                className="feature__option"
                name={description}
                checked={selected}
                onChange={e => {
                    console.log(e);
                    props.updateFeature();
                }}
            />
            <label htmlFor={id} className="feature__label">
                {description} ({USCurrencyFormat.format(price)})
            </label>
        </div>
    );
}

export default Option; 