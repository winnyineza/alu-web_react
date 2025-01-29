import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { bindActionCreators } from 'redux';
import axios from 'axios';

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password }
});

export const logout = () => ({
  type: LOGOUT
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER
});
export const loginSuccess = () => ({
  type: 'LOGIN_SUCCESS'
});

export const loginFailure = () => ({
  type: 'LOGIN_FAILURE'
});

export const boundLogin = dispatch => bindActionCreators(login, dispatch);
export const boundLogout = dispatch => bindActionCreators(logout, dispatch);
export const boundDisplayNotificationDrawer = dispatch => bindActionCreators(displayNotificationDrawer, dispatch);
export const boundHideNotificationDrawer = dispatch => bindActionCreators(hideNotificationDrawer, dispatch);

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    return axios.get('/dist/login-success.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        dispatch(loginSuccess());
      })
      .catch(error => {
        dispatch(loginFailure());
      });
  };
};

export const boundLoginRequest = (dispatch) => bindActionCreators(loginRequest, dispatch);