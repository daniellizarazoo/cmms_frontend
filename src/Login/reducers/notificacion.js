const notificacionReducer = (state={},action) => {
    switch(action.type){
        case 'SET_NOTIFICATION':
            return {...state,value:action.payload};
        default:
            return state;
    }
};

export default notificacionReducer;