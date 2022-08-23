import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
} from "./actionTypes"

import { AuthActions,AuthState } from "./types"

const initialState: AuthState={
    pending: false,
    token: "",
    error: null
}

const reducers=(state=initialState,action:AuthActions)=>{
    switch(action.type){
        case LOGIN_REQUEST:
        return {
            ...state,
            pending:true
        }
        case LOGIN_SUCCESS:
        return {
            ...state,
            pending:false,
            token:action.payload.token,
            error:null
        }
        case LOGIN_FAILURE:
        return {
            ...state,
            pending:false,
            token:"",
            error:action.payload.error
        }
        case SIGNUP_REQUEST:
        return {
            ...state,
            pending:true
        }
        case SIGNUP_SUCCESS:
        return {
            ...state,
            pending:false,
            token:action.payload.token,
            error:null
        }
        case SIGNUP_FAILURE:
        return {
            ...state,
            pending:false,
            token:"",
            error:action.payload.error
        }
        default: return {
            ...state
        }
    }
}

export default reducers;