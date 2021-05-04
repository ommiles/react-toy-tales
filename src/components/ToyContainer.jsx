import React, { Component } from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends Component {

  state = {
    toys: []
  }

  render() {
    return(
      <div id="toy-collection">
        {this.state.toys.map(toy => <ToyCard toy={toy} />)}
      </div>
    );
  }

  componentDidMount() {
    fetch('http://localhost:3000/toys')
        .then(response => response.json())
        .then(data => {
        this.setState({
            toys: data
        })
    })
}
}

export default ToyContainer;
