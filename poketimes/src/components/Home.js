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

//state here gets the state from the store
const mapStateToProps = (state) => {
    // THis object represents the diff properties  we want to add to the props
    return {
        posts: state.posts
    }
}
//connecting component to redux store and passing what all state properties we need 
// by passing mapStateToProps as an argument to connect function
export default connect(mapStateToProps)(Home);