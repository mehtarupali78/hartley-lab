
import { welcomeConstant } from '../constants';

export const welcomeDataAction = {
    getWelcomeData
}

function getWelcomeData() {
    let data="welcome to home page";
    console.log("reudesdnf");
    return dispatch => {
                dispatch(success(data));
    }
    function success(data) {return {type : welcomeConstant.WELCOMEDATA_SUCCESS,data}}
}