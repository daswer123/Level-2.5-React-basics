const initialState = {
    posts : [],
    categories : [],

}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case "CATEGORY_LOADED":
            return {
                ...state,
                categories : action.payload
            }

        case "POSTS_LOADED":
            return {
                ...state,
                posts : action.payload
            }
        default:
            return state;
        }
    }

export default reducer;