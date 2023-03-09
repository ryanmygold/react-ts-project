
import handNum from "./index"
const initialState = {
    ...handNum.state,
}
function rootReducer(state = initialState, action: { type: string, data: number }) {
    let newState = JSON.parse(JSON.stringify(state))
    // switch (action.type) {
    //     case handNum.add1:
    //         handNum.actions[handNum.add1](newState)
    //         break;
    //     case handNum.add2:
    //         handNum.actions[handNum.add2](newState, action)
    //         break;
    //     default:
    //         break;
    // }
    for (const item in handNum.actionNames) {
        if (item === action.type) {
            handNum.actions[item](newState, action)
            break
        }
    }
    return newState
}

export default rootReducer
