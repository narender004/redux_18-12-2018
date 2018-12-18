import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, deletePosts,fetchPostsbyId } from '../actions/postActions';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newPost) {
  //     this.props.posts.unshift(nextProps.newPost);
  //   }
  // }

  onDeleteClick = id => {
    console.log('id',id);
    this.props.deletePosts(id);
  };

  onEditClick = item => {
    console.log('id',item);
   this.props.fetchPostsbyId(item);
  };

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post._id}>
       <h3>{post._id}</h3>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <span onClick={this.onDeleteClick.bind(this, post._id)}> Delete </span>      
        <span onClick={this.onEditClick.bind(this, post)}> Edit </span>  
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => (
  console.log('state',state),
  {
  posts: state.posts.items,
 // newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts,deletePosts,fetchPostsbyId })(Posts);