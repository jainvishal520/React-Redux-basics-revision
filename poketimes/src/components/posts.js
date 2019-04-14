import React from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png'
const Posts = ({post}) => {
    return(
        <div className="container">
            <Link to={`/${post.id}`}>
                <img src={Pokeball} alt=""/>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </Link>
            
        </div>
    )
}

export default Posts