/* eslint-disable no-undef */

import React from 'react';

// import React, { Component} from 'react';

// ----- Uses functional component------ //
//We don't need render method here.Just return JSX

//extract variables from props using destructuring directly
// from parameter
const Ninjas = ({ninjas, deleteNinja}) => {
    
        //extract variables from props using destructuring
        // const {ninjas} = props;
        const ninjaList = ninjas.map((ninja) => {
            return ninja.age > 25 ?  (
                <div className="ninja" key={ninja.id}>
                    <div>Name:  {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={() => deleteNinja(ninja.id)}>delete</button>
                </div>
            ) : null
        })
        return(
            <div>
                {ninjaList}
            </div>
        )
}


// ----- Uses class based component------ //
// export class Ninjas extends Component{
//     render(){
//         //extract variables from props using destructuring
//         const {ninjas} = this.props;
//         const ninjaList = ninjas.map((ninja) => {
//             return (
//                 <div className="ninja" key={ninja.id}>
//                     <div>Name:  {ninja.name}</div>
//                     <div>Age: {ninja.age}</div>
//                     <div>Belt: {ninja.belt}</div>
//                 </div>
//             )
//         })
//         return(
//             <div>
//                 {ninjaList}
//             </div>
//         )
//     }
// }

export default Ninjas;