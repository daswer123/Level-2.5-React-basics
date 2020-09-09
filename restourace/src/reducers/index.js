const initialState = {
    menu : [],
    loading : true
}

function reducer(state = initialState,action) {
    switch(action.type){
        case "MENU_LOADED":
            return {
                menu: action.payloaded,
                loading : false
            }
        case "MENU_REQUESTED":
            return {
                menu : state.menu,
                loading : true
            }
        case "MENU_WRONG":
            return {
                error : true
            }
        default:
            return state;
    }
}
export default reducer