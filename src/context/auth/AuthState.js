import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';

import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from  '../types';

const AuthState = (props) => {

     const cachedUser =
       localStorage && JSON?.parse(localStorage.getItem("user"));
     const cachedToken = localStorage && localStorage.getItem("token");
     const cachedAuthorization = localStorage.user && localStorage.token;

    const initialState = {
      isAuthenticated: cachedAuthorization ? true : false,
      user: cachedUser ? cachedUser : null,
      token: cachedToken ? cachedToken : null,
      loading: false,
    };

    const [state,dispatch] = useReducer(AuthReducer,initialState);
    
    // /
    // const logIn = async (user) =>  {
    //         setAuthToken(user.token);
    //         dispatch({
    //             type:LOGIN_SUCCESS,
    //             payload:user
    //         });
    // }

    //login user
    const logIn = async (user) =>  {
            setAuthToken(user.token);
            dispatch({
                type:LOGIN_SUCCESS,
                payload:user
            });
    }

    const loginFail = async (user) =>  {
            dispatch({
                type:LOGIN_FAIL,
                payload:user
            });
    }

    //logout
        const logOut = () => {
            dispatch({
                type: LOGOUT
            });
        }

    
   
    return (
        <AuthContext.Provider
            value = {{
                isAuthenticated:state.isAuthenticated,
                user:state.user,
                logIn,
                loginFail,
                logOut
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;