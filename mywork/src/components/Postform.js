import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost ,fetchPostsbyId,updateposts,inputtextval} from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    console.log('props',props);
    super(props);
    this.state = {
      update_id: 'hello',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
   
    console.log('value',e.target.value);
    const value = e.target.value;
    this.props.inputtextval(value);
   //this.setState({ [e.target.name]: e.target.value });
  }

  // componentDidUpdate() {
  //   const newProps = this.props
  //   console.log('newProps',newProps);
  //   console.log('newProps title' ,newProps.newPost.title);
  //  // this.setState({ title: newProps.newPost.title})
    
  // }




// componentWillReceiveProps(nextProps) {
// console.log('ddddddddddddddddddddddd',nextProps.newPost.title);
//   if(nextProps.newPost.title !== '') {
//     console.log('welcome new value');
//     this.setState({title:nextProps.newPost.title })
//   }
// }

// componentWillReceiveProps(nextProps) {
// console.log('ddddddddddddddddddddddd',nextProps.newPost._id);
// console.log('xxxx',this.state.update_id);
//   if(nextProps.newPost._id !== '') {
//     console.log('welcome new value');
//     this.setState({update_id:nextProps.newPost._id })
//     console.log('fffff',this.state.update_id); 

//   }
// }

// componentDidUpdate(nextProps) {
// console.log('ddddddddddddddddddddddd',nextProps.newPost._id);
// console.log('xxxx',this.state.update_id);
//   if(nextProps.newPost._id !== '') {
//     console.log('welcome new value');
//     this.setState({update_id:nextProps.newPost._id })
//     console.log('fffff',this.state.update_id); 
//     break;

//   }
// }


// componentWillReceiveProps(nextProps) {
// console.log('ddddddddddddddddddddddd',nextProps.newPost._id);
//   if(nextProps.newPost._id !== '') {
//     console.log('welcome new value');
//     this.setState({update_id: nextProps.newPost._id} , ()=>{

//       console.log('xxxx',this.state.update_id);
  
//       });

//   }
// }





  onSubmit(e) {
    e.preventDefault();
    console.log('xxxx',this.props.newPost);
    // // let post;
    if(this.props.newPost._id) {
   
    this.props.updateposts(this.props.newPost._id,this.props.newPost.title);
  
    } else {
    let  post = {
        title: this.props.newPost.title
      };
    this.props.createPost(post);
    }
   
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.props.newPost.title}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

const mapStateToProps = state => (
  console.log('state',state),
  {
  newPost: state.posts.item
});

export default connect(mapStateToProps, { createPost,fetchPostsbyId,updateposts,inputtextval})(PostForm);