import Axios from 'axios'
import { USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED } from './actionTypes'

const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyAZF6J9H05WtBQLPIOQ8CrmRE80YT_rGn0'

export const userLogged = user => {
  return {
    type: USER_LOGGED_IN,
    payload: user
  }
}

export const logout = user => {
  return {
    type: USER_LOGGED_OUT,
  }
}

export const createUser = (user) => {
  return dispatch => {
    Axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    })
      .catch(err => {
        dispatch(setMessage({
          title: 'Erro',
          text: 'Ocorreu um erro inesperado!'
      }))
      })
      .then(res => {
        if (res.data.localId) {
          Axios.put(`/users/${res.data.localId}.json`, {
            name: user.name,
          })
            .catch(err => {
              dispatch(setMessage({
                title: 'Erro',
                text: 'Ocorreu um erro inesperado!'
              }))
            })
            .then(res => {
              dispatch(setMessage({
                title: 'Sucesso',
                text: 'Usuario criado com sucesso!'
            }))
            })
        }
      })
  }
}

export const loadingUser = () => {
  return {
    type: LOADING_USER,
  }
}

export const userLoaded = () => {
  return {
    type: USER_LOADED,
  }
}

export const login = user => {
  return dispatch => {
    dispatch(loadingUser())
    Axios.post(`${authBaseURL}/verifyPassword?key=${API_KEY}`, {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    })
      .catch(err => {
        dispatch(setMessage({
          title: 'Erro',
          text: 'Ocorreu um erro inesperado!'
        }))
      })
      .then(res => {
        if (res.data.localId) {
          user.token = res.data.idToken
          Axios.get(`/users/${res.data.localId}.json`)
            .catch(err => {
              dispatch(setMessage({
                title: 'Erro',
                text: 'Ocorreu um erro inesperado!'
              }))
            })
            .then(res => {
              delete user.password
              user.name = res.data.name
              dispatch(userLogged(user))
              dispatch(userLoaded())
            })
        }
      })
  }
}