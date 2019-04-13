import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'green', 'yellow', 'pink', 'blue', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const className = `${randomColor}-text`;

    // any props about component receives needs to be passed here
    return(props) => {
        return(
            <div className={className}>
                {/* passing props back to component */}
                {/* <WrappedComponent props={props} /> */}

                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow;