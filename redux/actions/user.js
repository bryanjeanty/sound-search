import { userTypes } from "./types/user";
import axios from "axios";
axios.defaults.withCredentials = true;

const signup = ({ email, password }) => async dispatch => {
  dispatch({ type: userTypes.FETCHING });
  try {
    const { data } = await axios.post("/api/users/signup", {
      email,
      password
    });
    return dispatch({
      type: userTypes.SIGNUP_SUCCESS,
      message: data.message,
      email: data.email
    });
  } catch (error) {
    return dispatch({
      type: userTypes.SIGNUP_ERROR,
      message: error.message
    });
  }
};

const signin = ({ email, password }) => async dispatch => {
  dispatch({ type: userTypes.FETCHING });
  try {
    const { data } = await axios.post("/api/session/signin", {
      email,
      password
    });
    return dispatch({
      type: userTypes.SIGNIN_SUCCESS,
      message: data.message,
      email: data.email
    });
  } catch (error) {
    return dispatch({
      type: userTypes.SIGNIN_ERROR,
      message: error.message
    });
  }
};

const signout = () => async dispatch => {
  dispatch({ type: userTypes.FETCHING });
  try {
    const { data } = await axios.get("/api/session/signout", {
      withCredentials: true
    });
    return dispatch({
      type: userTypes.SIGNOUT_SUCCESS,
      message: data.message
    });
  } catch (error) {
    return dispatch({
      type: userTypes.SIGNOUT_ERROR,
      message: error.message
    });
  }
};

export { signup, signin, signout };
