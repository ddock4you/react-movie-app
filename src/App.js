import React from 'react';
// import propTypes from 'prop-types';

// list 내 child들은 key value가 필요함

class App extends React.Component {
  
  state = {
    isLoading: true
  }

  componentDidMount = () => {
    setTimeout(()=> {
      this.setState({isLoading: false});
    },3000);
  }
  
  
  
  render() {
    const {isLoading} = this.state;

    return (
      <div>{isLoading ? "Loading..." : "not Loading"}</div> 
    )
  }
}

export default App;
