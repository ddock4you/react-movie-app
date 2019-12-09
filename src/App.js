import React from 'react';
// import propTypes from 'prop-types';

// list 내 child들은 key value가 필요함

class App extends React.Component {
  add = () => {
    console.log('add');
  };

  minus = () => {
    console.log('minus');
  };
  
  state = {
    count: 0
  }
  
  render() {
    return (
      <div>
        <h1>this number is {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default App;
