import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { deleteePost } from '../actions/postActions'
class PostItem extends Component {

    // state = {
    //     post: null
    // }

    // componentDidMount() {
    //     const id = this.props.match.params.post_id;
    //     console.log(id)
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //     .then((res) => {
    //         this.setState({
    //             post: res.data
    //         })
    //     })
        
    // }
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/')
    }
    render(){
        console.log(this.props)
        const post = this.props.post ? (
            <div className="container">
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <button onClick={this.handleClick}>delete</button>
            </div>
        ) : (<div>loading .. </div>)
        return(
            <div>{post}</div>
            
        )
    }
}

//ownProps refers to the props of this component before we attach/map the additional props from the redux store
//our props must contain info about routes and we can grab id from the routes
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    console.log(typeof id)
    return {
        post: state.posts.find(post => post.id === Number(id)) 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch(deleteePost(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem); 