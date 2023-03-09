
const store = {
    state: {
        sarr: [10, 20, 30]
    },
    actions: {
        arrpush(newState: { sarr: Array<number> }, action: { type: string, data: number }) {
            newState.sarr.push(action.data)
        },
    },
    actionNames: {}
}

const actionNames = {}
for (let i in store.actions) {
    actionNames[i] = i;
}
store.actionNames = actionNames

export default store