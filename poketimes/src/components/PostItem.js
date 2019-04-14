import React, { Component } from 'react';
import axios from 'axios';

class PostItem extends Component {

    state = {
        post: null
    }

    componentDidMount() {
        const id = this.props.match.params.post_id;
        console.log(id)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
            this.setState({
                post: res.data
            })
        })
        
    }
    render(){
        const post = this.state.post ? (
            <div className="container">
                <h4>{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (<div>loading .. </div>)
        return(
            <div>{post}</div>
            
        )
    }
}

export default PostItem;