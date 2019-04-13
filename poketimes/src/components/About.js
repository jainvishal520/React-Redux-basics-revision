import React from 'react';
import Rainbow from './hoc/Rainbow';
const About = (props) => {
    return(
        <div className="container">
            <h4 className="center">
                About
            </h4>
            <p className="center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem eligendi est illo laudantium aspernatur, deserunt ipsum eveniet optio, fugiat pariatur ea magni quia quo natus inventore veniam! Blanditiis, perspiciatis.
            </p>
        </div>
    )
}

export default Rainbow(About);