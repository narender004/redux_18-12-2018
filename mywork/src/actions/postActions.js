import axios from 'axios';
import { FETCH_POSTS, NEW_POST, DELETE_POST, FETCH_POST,UPDATE_POST,INPUT_TEXT_VALUE} from './types';
//const url = 'http://localhost:4040/api/redux'


export const fetchPosts = () => dispatch => {
  console.log("helllooooooooooooo");
  fetch('/api/redux')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts.redux
      })
    );
};


// export const fetchPosts = () => dispatch => {
//   console.log("helllooooooooooooo");
//   axios.get('/api/redux').then(res =>
//     dispatch({
//       type: FETCH_POSTS,
//       payload: res.data
//     })
//   );
// };


export const createPost = item => dispatch => {
  console.log("post data form axios");
  axios.post('/api/redux', item).then(res =>
    dispatch({
      type: NEW_POST,
      payload: res.data
    })
  );
};

export const deletePosts = id => dispatch => {
  axios.delete(`/api/redux/${id}`).then(res =>
    dispatch({
      type: DELETE_POST,
      payload: id
    })
  );
};

export const fetchPostsbyId = item => dispatch => {
 
    dispatch({
      type: FETCH_POST,
      payload: item
    })
};

export const updateposts = (id,title) => dispatch => {
  console.log("update data by id",id,title);
  //console.log("update data by id",title);
  const value = {
    id: id,
    title: title
  } 
  console.log('value',value);
  axios.put(`/api/redux/`,value).then(res =>
    dispatch({
      type: UPDATE_POST,
      payload: id
    })
  );
};

export const inputtextval = data => dispatch => {
  console.log("inputtextval");
 
    dispatch({
      type: INPUT_TEXT_VALUE,
      payload: data
    })
  
};
