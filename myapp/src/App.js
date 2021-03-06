import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {

  //We have a state here, so it is a class based component 
  state={
    ninjas: [
      {name:'Vishal', age:25, belt:'black',id:1},
      {name:'jarvis', age:30, belt:'blue',id:2},
      {name:'siri', age:24, belt:'white',id:3}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    const ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas
    })
  }

  deleteNinja = (id) => {
    const ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id
    });
    this.setState({ninjas})
  }  

  componentDidMount(){
    console.log("mounted")
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Upadted");
    console.log(prevProps, prevState)
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
