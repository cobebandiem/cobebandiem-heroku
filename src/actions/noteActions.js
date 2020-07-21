import {database} from './../firebase';

export const getNotes=()=>{
    return dispatch=>{
        dispatch({
            type:'NOTES_STATUS',
            payload:true
        })
        database.on('value',snapshot => {
            dispatch({
                type:'GET_NOTES',
                payload:snapshot.val()
            });
            dispatch({
                type:'NOTES_STATUS',
                payload:false
            });
        },()=>{
            dispatch({
                type:'NOTES_STATUS',
                payload:-1
            })
        });     
    }
}
export const saveNote=(note)=>{ 
    return dispatch=>{
        database.push(note);
    }
}
export const deteleNote=(id)=>{ 
    return dispatch=>{
        database.child(id).remove();
    }
}