
const store = {
    state: {
        num: 20
    },
    actions: { //只放同步的写法
        add1(newState: { num: number }) {
                newState.num++
        },
        add2(newState: { num: number }, action: { type: string, data: number }) {
            newState.num += action.data
        }
    },
    // actionName:{
    //     add1: "add1",
    //     add2: "add2"
    // },
    asyncactions:{//只放异步的写法
        asyncAdd1(dispatch:Function){
            setTimeout(() => {
                dispatch({ type: "add2", data: 10 })
            }, 1000);
        }
    },
    actionNames: {}
}
const actionNames = {}
for (let i in store.actions) {
    actionNames[i] = i;
}
store.actionNames = actionNames

export default store
