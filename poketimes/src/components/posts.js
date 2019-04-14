import React from 'react';

const Posts = ({post}) => {
    return(
        <div key={post.id}>
            {post.title}
        </div>
    )
}

export default Posts