const initialState = {
    token: '',
};

const saveTokenReducer = (state = initialState,action) =>{
    switch(action.type){
        case 'SET_TOKEN':
            return {...state,value: action.payload};
        default:
            return state;
    }
};

export default saveTokenReducer;