import React, { Component } from 'react';
import Posts from './posts';
// import axios from 'axios';
import { connect } from 'react-redux';
class Home extends Component {
    // state = {
    //     posts: []
    // }

    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then((res) => {
    //         this.setState({
    //             posts : res.data.slice(0,10)
    //         })
    //     })
    // }

    render(){
        return(
            this.props.posts.map((post) => (
                <Posts post={post} key={post.id} />
                )
            )
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
//connecting component to redux store and passing what all state properties we need 
// by passing mapStateToProps as an argument to connect function
export default connect(mapStateToProps)(Home);