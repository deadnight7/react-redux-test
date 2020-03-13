
//Import reducers
let initalState = {
    counter: 0
}
let reducer = (state = initalState, action) => {
    if (action.type === "INCREMENT"){
        return {
            ...this.state,
            counter: this.state.counter + 1
        }
    }
    if (action.type === "DECREMENT"){
        return {
            ...this.state,
            counter: this.state.counter + 1
        }
    }
    if (action.type === "MUX"){
        return {
            ...this.state,
            counter: this.state.counter + 1
        }
    }
    if (action.type === "DIV"){
        return {
            ...this.state,
            counter: this.state.counter + 1
        }
    }
    else {
        return {
            ...state
        }
    }
}

export default reducer;