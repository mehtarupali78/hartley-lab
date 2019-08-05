import { welcomeConstant } from '../constants';

const initialState={
    welcomedata:null
}
export function welcomeData(state=initialState, action){
    switch(action.type){
        case welcomeConstant.WELCOMEDATA_SUCCESS:
             return {
                welcomedata:action.data
             };
        default:
             return state
    }
}