
export default {
    state: {
        sarr: [10,20,30]
    },
    actions: {
        arrpush(newState:{sarr:Array<number>}, action:{type:string,data:number}) {
            newState.sarr.push(action.data)
        },
    },
    arrpush:"arrpush"
}
