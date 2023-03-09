
import handArr from "./index"
const initialState = {
    ...handArr.state
}
function rootReducer(state = initialState, action: { type: string, data: number }) {
    let newState = JSON.parse(JSON.stringify(state))
    // switch (action.type) {
    //     case handArr.arrpush:
    //         handArr.actions[handArr.arrpush](newState, action)
    //         break;
    //     default:
    //         break;
    // }
    for (let item in handArr.actions) {
        if (item === action.type) {
            handArr.actions[item](newState, action)
            break
        }
    }
    return newState
}

export default rootReducer
