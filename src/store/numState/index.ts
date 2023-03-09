
export default {
    state: {
        num: 20
    },
    actions: {
        add1(newState: { num: number }) {
            newState.num++
        },
        add2(newState: { num: number }, action: { type: string, data: number }) {
            newState.num += action.data
        }
    },
    actionName:{
        add1: "add1",
        add2: "add2"
    }
}
