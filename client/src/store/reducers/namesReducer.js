const initialState = {
    allNames: []
}

const namesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALLNAMES":
            return { allNames: state.allNames.concat(action.name) }
        default:
            return state
    }

}

export default namesReducer
