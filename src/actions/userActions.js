import {auth,googleProvider} from './../firebase';
export const getUser=()=>{
    return dispatch=>{
        dispatch({
            type:'USER_STATUS',
            payload:true
        })
        auth.onAuthStateChanged(user=>{
            dispatch({
                type:'GET_USER',
                payload:user
            })
            dispatch({
                type:'USER_STATUS',
                payload:false
            })
        })
        
    }
}
export const logout=()=>{
    return dispatch=>{
        auth.signOut()
    }
}
export const googleLogin=()=>{
    return dispatch=>{
        auth.signInWithPopup(googleProvider);
    }
}

