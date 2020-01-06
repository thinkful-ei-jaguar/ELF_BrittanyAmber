import React, { Component } from 'react';

import Main from './Main';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';

class App extends Component {
  state = {
    features: [{
      id: 1,
      name: 'Processor',
      options: [{
        id: 8,
        description: '17th Generation Intel Core HB (7 Core with donut spare)',
        price: 400
      }, {
        id: 9,
        description: 'Professor X AMD Fire Breather with sidewinder technology',
        price: 300
      }],
      selectedId: 9
    }, {
      id: 2,
      name: 'Operating System',
      options: [{
        id: 10,
        description: 'Ubuntu Linux 16.04',
        price: 400
      }, {
        id: 11,
        description: 'Bodhi Linux',
        price: 300
      }],
      selectedId: 11
    }, {
      id: 3,
      name: 'Video Card',
      options: [{
        id: 12,
        description: 'Toyota Corolla 1.5v',
        price: 400
      }, {
        id: 13,
        description: 'Mind mild breeze 2000',
        price: 300
      }],
      selectedId: 13
    }, {
      id: 4,
      name: 'Display',
      options: [{
        id: 14,
        description: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        price: 400
      }, {
        id: 15,
        description: '15.3" HGTV (3840 x 2160) Home makeover edition',
        price: 300
      }],
      selectedId: 15
    }]
  };

  updateFeature = (featureIndex, optionId) => {
    let feature = this.state.features[featureIndex];
    let features = [...this.state.features];
    features[featureIndex].selectedId = optionId;
    this.setState({
      features: features
    });
  }; 

  render() {
    return (
      <div className="App" >
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <Main features={this.state.features} updateFeature={this.updateFeature}/>
      </div>
    );
  }
}




// render() {
//   const features = Object.keys(this.props.features).map((feature, idx) => {
//     const featureHash = feature + '-' + idx;
//     const options = this.props.features[feature].map(item => {
//       const itemHash = slugify(JSON.stringify(item));
//       return (
//         <div key={itemHash} className="feature__item">
//           <input
//             type="radio"
//             id={itemHash}
//             className="feature__option"
//             name={slugify(feature)}
//             checked={item.name === this.state.selected[feature].name}
//             onChange={e => this.updateFeature(feature, item)}
//           />
//           <label htmlFor={itemHash} className="feature__label">
//             {item.name} ({USCurrencyFormat.format(item.cost)})
//           </label>
//         </div>
//       );
//     });

//     return (
//       <fieldset className="feature" key={featureHash}>
//         <legend className="feature__name">
//           <h3>{feature}</h3>
//         </legend>
//         {options}
//       </fieldset>
//     );
//   });

//   const summary = Object.keys(this.state.selected).map((feature, idx) => {
//     const featureHash = feature + '-' + idx;
//     const selectedOption = this.state.selected[feature];

//     return (
//       <div className="summary__option" key={featureHash}>
//         <div className="summary__option__label">{feature} </div>
//         <div className="summary__option__value">{selectedOption.name}</div>
//         <div className="summary__option__cost">
//           {USCurrencyFormat.format(selectedOption.cost)}
//         </div>
//       </div>
//     );
//   });

//   const total = Object.keys(this.state.selected).reduce(
//     (acc, curr) => acc + this.state.selected[curr].cost,
//     0
//   );



export default App;
