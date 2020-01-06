import React from 'react';

const Main = props => {
    return (
        <main>
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {props.features.map(feature => {
                    return <Feature name={props.featureName} />
                })}
            </form>
            <section className="main__summary">
                <h2>Your cart</h2>
                {props.features.map(feature => {
                    <Selected />
                })}
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {USCurrencyFormat.format(total)}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main; 