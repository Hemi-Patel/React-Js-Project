import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../config/firebase.config";

export const ErrorMessage =(msg)=>{
    return{
        type:"ERROR_MESSAGE",
        payload:msg
    }
}
export const signUpUser = ()=>{
    return{
        type:"SIGN_UP_USER"
    }
}
export const signInUser = (user)=>{
    return{
        type:"SIGN_IN_USER",
        payload:user
    }
}
export const signOutUser = ()=>{
    return{
        type:"SIGN_OUT_USER",
    }
}

export const signUpUserAsync = ({email,password}) => {

    return async (dispatch) => {
        try {
            let res= await createUserWithEmailAndPassword(auth,email,password)
            // console.log(res);
            dispatch(signUpUser())
            
        } catch (error) {
            console.log(error);
            dispatch(ErrorMessage(error.message)) 
        }
    }
}
export const signInUserAsync = ({email,password}) => {

    return async (dispatch) => {
        try {
            let res= await signInWithEmailAndPassword(auth,email,password)
            // console.log(res);
            dispatch(signInUser(res.user))
            
        } catch (error) {
            console.log(error);
            dispatch(ErrorMessage(error.message)) 
        }
    }
}
export const signOutAsync = () => {

    return async (dispatch) => {
        try {
            let res= await signOut(auth)
            // console.log(res);
            dispatch(signOutUser())
            
        } catch (error) {
            console.log(error);
            dispatch(ErrorMessage(error.message)) 
        }
    }
}