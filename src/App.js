import React from 'react';
// import propTypes from 'prop-types';

// list 내 child들은 key value가 필요함

class App extends React.Component {
  
  state = {
    count: 0
  }
  
  // state 값을 직접 바꾸는게 아니라 새롭게 선언(state는 object) update 느낌?
  // setState는 state값을 새로 선언하고 render 함수에 refresh를 요청
  add = () => {
    this.setState(current => ({count: current.count +1}));
    // this.setState({count: this.state.count +1});
  };

  minus = () => {
    this.setState(current => ({count: current.count -1}));
  };
  
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
