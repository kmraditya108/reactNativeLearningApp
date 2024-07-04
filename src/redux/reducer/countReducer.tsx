import { Types } from "../actionTypes";


const initState = {
    counterVal: 0
}

export default (
    state=initState, 
    action:{type:string, payload?:string}
) => {

    if(action.type === Types.COUNT_INCREASE){
        return increaseVal(state, action.payload);
    }
    else if(action.type === Types.COUNT_DECREASE){
        return decreaseVal(state);
    }
    else{
        return resetVal(state);
    }


    // switch (action.type) {
    //     case Types.COUNT_INCREASE:
    //         return increaseVal(state);
    //     case Types.COUNT_DECREASE:
    //         return {
    //             ...state,
    //             counterVal: state.counterVal-1
    //         };
    //     case Types.COUNT_RESET:
    //         return {
    //             ...state,
    //             counterVal: 0
    //         };
    
    //     default:
    //        return state;
    // }
}


function increaseVal(state:{counterVal:number|string}, payload?:number|string){
    return {
        ...state,
        counterVal: payload? payload : Number(state.counterVal)+1
    };
}

function decreaseVal(state:{counterVal:number|string}){
    return {
        ...state,
        counterVal: Number(state.counterVal)-1
    };
}

function resetVal(state:{counterVal:number|string}){
    return {
        ...state,
        counterVal: 0
    };
}