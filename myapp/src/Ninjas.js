import React, { Component} from 'react';

export class Ninjas extends Component{
    render(){
        //extract variables from props using destructuring
        const {name, age, belt} = this.props;
        return(
            <div className="ninja">
                <div>Name:  {name}</div>
                <div>Age: {age}</div>
                <div>Belt: {belt}</div>
            </div>
        )
    }
}

export default Ninjas;