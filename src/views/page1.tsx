
import { useDispatch, useSelector } from "react-redux";

function Page1() {
    const dispatch = useDispatch();
    //对num的操作
    const { num } = useSelector((state: RootState) => ({
        num: state.numReducer.num
    }));

    //对数组的操作
    const { sarr } = useSelector((state: RootState) => ({
        sarr: state.arrReducer.sarr
    }));


    const changeNum = () => {
        dispatch({ type: "add1" })
    }
    
    const changeNum2 = () => {
        // dispatch({ type: "add2", data:10 })
        dispatch((dis:Function) => {
            setTimeout(() => {
                dis({ type: "add2", data: 10 })
            }, 1000);
        })
    }

    const changeArr = () => {
        dispatch({ type: "arrpush", data: 100 })
    }


    return (
        <div className="box">
            <p>这是Page1页面</p>
            <p>{num}</p>
            <p>{sarr}</p>
            <button onClick={changeNum}>add1</button>
            <button onClick={changeNum2}>add2</button>
            <button onClick={changeArr}>addArr</button>
        </div>
    )
}

export default Page1


