import {AD_MESSAGE, ADD_MESSAGE} from '../action/message';

const INITIAL_STATE = {
    messages : []
}

export default  (state = INITIAL_STATE , action) =>{
    switch (action.type){
        case ADD_MESSAGE:
            return {
                ...state
            }
        default:
            return state
    }
}
