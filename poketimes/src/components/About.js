import React from 'react';

const About = (props) => {
    setTimeout(() => {
        props.history.push('/')
    }, 2000)
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

export default About;