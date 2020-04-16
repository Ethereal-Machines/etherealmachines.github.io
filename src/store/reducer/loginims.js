 

import * as actionType from '../actions/action-type'
import {GetToken} from '../../helpers/token'

const initialState = {
    isLogedIn: !!GetToken(),
    redirect: '/dashboard'
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.LOGINASIMS: 
            return {
                isLogedIn: !!GetToken(),
                redirect: action.value
            }
        case actionType.LOGOUTASIMS:
            return {
                isLogedIn: false
            }
        default:
            return state
    }
};

export default reducer;