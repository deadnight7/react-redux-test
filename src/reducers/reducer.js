
//Import reducers
let initalState = {
    counter: 0
}
let reducer = (state = initalState, action) => {
    if (action.type === "INCREMENT"){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === "DECREMENT"){
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === "MUX"){
        return {
            ...state,
            counter: state.counter * state.counter
        }
    }
    if (action.type === "DIV"){
        return {
            ...state,
            counter: state.counter / 2
        }
    }
    else {
        return {
            ...state
        }
    }
}

export default reducer;