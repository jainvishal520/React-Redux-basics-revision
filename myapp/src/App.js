import React, { Component } from 'react';
import Ninjas from './Ninjas';
class App extends Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
        <Ninjas name="vishal" age="25" belt="black"/>
      </div>
    );
  }
}

export default App;
