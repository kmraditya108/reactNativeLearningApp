import { Types } from "../actionTypes";

// export const TypeOfFunction = (type:string) => { //action type
//     if(type === "INCREAMENT"){
//         incrementVal()
//     }else if(type === "decrement"){
//         decrement();
//     }else{
//         resetVal()
//     }
// }

// export const incrementVal = (val?:number) =>{ //actions
//     return val++;
// }
// export const decrementVal = (val?:number) =>{//actions
//     return val--;
// }
// export const resetVal = () =>{//actions
//     return 0;
// }



// Actions
const increment = (payload?:string) => ({
    type: Types.COUNT_INCREASE,
    payload
});

const decrement = () => ({
    type: Types.COUNT_DECREASE
});

const resetCount = () => ({
    type: Types.COUNT_RESET
});

export {increment, decrement, resetCount}