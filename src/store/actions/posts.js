import Axios from 'axios'
import { ADD_POST, CREATING_POST, POST_CREATED, ADD_COMMENT, SET_POSTS } from '../actions/actionTypes'
import { setMessage } from './message'

export const addPost = post => {
  return (dispatch, getState) => {
    dispatch(creatingPost())
    Axios.post(`/posts.json?auth=${getState().user.token}`, { ...post })
      .catch(err => dispatch(setMessage({
        title: 'Erro',
        text: 'Ocorreu um erro inesperado!'
      })))
      .then(res => {
        dispatch(fetchPosts())
        dispatch(postCreated())
        dispatch(setMessage({ title: 'Sucesso', text: 'Nova postagem!' }))
      })
  }
  // return {
  //   type: ADD_POST,
  //   payload: post
  // }
}

export const addComment = payload => {
  return dispatch => {
    Axios.get(`/posts/${payload.postId}.json`)
      .catch(err => dispatch(setMessage({
        title: 'Erro',
        text: 'Ocorreu um erro inesperado!'
      })))
      .then(res => {
        const comments = res.data.comments || []
        comments.push(payload.comment)
        Axios.patch(`/posts/${payload.postId}.json?auth=${getState().user.token}`, { comments })
          .catch(err => dispatch(setMessage({
            title: 'Erro',
            text: 'Ocorreu um erro inesperado!'
          })))
          .then(res => {
            dispatch(fetchPosts())

          })
      })
  }


  // return {
  //   type: ADD_COMMENT,
  //   payload
  // }
}

export const setPosts = posts => {
  return {
    type: SET_POSTS,
    payload: posts
  }
}

export const fetchPosts = () => {
  return dispatch => {
    Axios.get('/posts.json')
      .catch(err => dispatch(setMessage({
        title: 'Erro',
        text: 'Ocorreu um erro inesperado!'
      })))
      .then(res => {
        let rawPosts = res.data
        let posts = []

        for (let key in rawPosts) {
          posts.push({
            ...rawPosts[key],
            id: key
          })
        }
        dispatch(setPosts(posts.reverse()))
      })
  }
}

export const creatingPost = () => {
  return {
    type: CREATING_POST
  }
}

export const postCreated = () => {
  return {
    type: POST_CREATED
  }
}