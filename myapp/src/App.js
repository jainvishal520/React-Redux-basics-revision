import React, { Component } from 'react';
import Ninjas from './Ninjas';
class App extends Component {

  //We have a state here, so it is a class based component 
  state={
    ninjas: [
      {name:'Vishal', age:25, belt:'black',id:1},
      {name:'jarvis', age:30, belt:'blue',id:2},
      {name:'siri', age:24, belt:'white',id:3}
    ]
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
