
import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT
 } from '../types';

export default(state,action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token',action.payload.token);
            localStorage.setItem('user',JSON.stringify(action.payload));
            return {
                ...state,
                token:action.payload.token,
                isAuthenticated:true,
                user:JSON.stringify(action.payload),
                loading:false,
                errFlag:false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        }
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return {
                token:null,
                isAuthenticated:false,
                loading:true,
                user:null,
                error:action.payload,
                errFlag:true
           }
        case LOGOUT:
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                return {
                    token:null,
                    isAuthenticated:false,
                    loading:false,
                    user:null
               }
        default:
            return state;
    }
}