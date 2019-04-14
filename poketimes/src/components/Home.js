import React, { Component } from 'react';
import Posts from './posts';
import axios from 'axios';
class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            this.setState({
                posts : res.data.slice(0,10)
            })
        })
    }

    render(){
        return(
            this.state.posts.map((post) => (
                <Posts post={post} key={post.id} />
                )
            )
        )
    }
    
}

export default Home;