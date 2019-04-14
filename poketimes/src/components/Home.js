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
                posts : res.data
            })
        })
    }

    render(){
        return(
            this.state.posts.map((post) => (
                <Posts post={post} />
                )
            )
        )
    }
    
}

export default Home;