const initialState={
    notes:[]
};
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_NOTES':{
            return action.payload;
        }
        case 'SAVE_NOTE':{
           return state; 
        }
        default:return state;
    }
}

export default reducer;