import {useReducer} from "react";

function reducer(state, action){
    switch(action.type){
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        case "INIT":
            return 0;
        default:
            return state;
    }
}

function TestComp(){
    const [count, dispatch] = useReducer(reducer, 0);

    // const onIncrease = () => {
    //     setCount(count+1);
    // };
    
    // const onDecrease = () => {
    //     setCount(count-1);
    // };

    return (
        <div>
            <h4>test component</h4>
            <div>
                <bold>{count}</bold>
            </div>
            <div>
                <button onClick={() => dispatch({type: "INCREASE", data: 1})}>+</button>
                <button onClick={() => dispatch({type: "DECREASE", data: 1})}>-</button>
                <button onClick={() => dispatch({type: "INIT", data: 1})}>Init</button>
            </div>
        </div>
    );
}

export default TestComp;