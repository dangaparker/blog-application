import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from'react-router-dom';

class PostsShow extends Component {
    componentDidMount(){
        const { id } = this.props.match.params; //this is provided to us by react-router
        this.props.fetchPost(id);
    }

    onDeleteClick(){
        const { id } = this.props.match.params;
        this.props.deletePost(id); //because its an action creator, we call it from this.props
    }

    render(){
        //this.props === ownProps
        //posts[this.props.match.params.id] we would use this if we didn't use ownPosts in MSTP
        
        const { post } = this.props

        if(!post){
            return <div>Loading...</div>
        }

        return(
            <div>
                <Link className='btn btn-info' to='/'>Back to Index</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}

function mapStateToProps({ posts }, ownProps ){  //first argument is application state, 2nd is ownProps
    return { post: posts[ownProps.match.params.id] }; //this allows us to only get one post instead of all of the posts from app state
}

export default connect(mapStateToProps, { fetchPost })(PostsShow)