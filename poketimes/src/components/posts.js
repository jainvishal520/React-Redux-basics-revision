import React from 'react';
import { Link } from 'react-router-dom';
const Posts = ({post}) => {
    return(
        <div className="container">
            <Link to={`/${post.id}`}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </Link>
            
        </div>
    )
}

export default Posts