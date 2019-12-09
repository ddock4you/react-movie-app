import React from 'react';
import axios from 'axios';
// import propTypes from 'prop-types';

// list 내 child들은 key value가 필요함

class App extends React.Component {
  
  state = {
    isLoading: true
  }

  getMovies = async () => {
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    console.log(movies);
  }

  componentDidMount = () => {
    setTimeout(()=> {
      this.setState({isLoading: false});
    },3000);

    this.getMovies();
  }
  
  
  
  render() {
    const {isLoading} = this.state;

    return (
      <div>{isLoading ? "Loading..." : "not Loading"}</div> 
    )
  }
}

export default App;
