import React from 'react';

import Feature from './Feature';
import Selected from './Selected';
import Total from './Total';

const Main = props => {
    const total = props.features.reduce((accumulator, feature) => {
        let selected = feature.SelectedId;
        let selectedOption = feature.options.find(option => option.id === selected);
        console.log(selectedOption);
        let price = selectedOption.price;
        return price + accumulator;
    }, 0);

    return (
        <main>
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {props.features.map((feature, featureIndex) => {
                    return <Feature key={feature.id} id={feature.id} name={feature.name} options={feature.options} featureIndex={featureIndex} />
                })}
            </form>
            <section className="main__summary">
                <h2>Your cart</h2>
                {props.features.map(feature => {
                    return <Selected key={feature.id} name={feature.name} selected={feature.options.find(option => option.id === feature.SelectedId)} />
                })}
                <Total total={total} />
            </section>
        </main>
    );
}

export default Main; 