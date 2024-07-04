import { useDispatch } from "react-redux";
import { Types } from "../actionTypes";
import Login from "../../screens/Login";
import { LoginTypes, loginActionProps, loginDataProps, loginSuccess } from "../actions/loginActions";
import { ActionProps } from "../actions/types";

const loginInit = {
    user: {},
}

export default (state=loginInit, action:{type:string, payload?:loginDataProps})=>{
    // const dispatch = useDispatch();
    switch (action?.type) {
        case Types.LOGIN_INIT:
            return {...state.user, isLoginStarted:true};
        case Types.LOGIN_SUCCESS:
            console.log("I have started the login success...");
            return {...state.user, isLoginStarted:false, msg:`Hi ${action?.payload?.userName} !! Welcome to our world..`, loginSuccess: true}
        case Types.LOGIN_FAILURE:
            return state
    
        default:
            return state;
    }
}