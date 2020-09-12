const initialState = {
    posts : [],
    categories : [],
    activeCategory : ""

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

        case "SELECTED_CATEGORY":
            return {
                ...state,
                activeCategory : action.active
            }

        case "POST_STATUS_TOGGLED":
            const post = action.payload;
            const postIndex = state.posts.findIndex(statePost => post.id == statePost.id);
            return{
                ...state,
                posts : [
                    ...state.posts.slice(0,postIndex),
                    post,
                    ...state.posts.slice(postIndex+1)
                ]
            }
        
        case "POST_DELETED":
           const postIndex1 = state.posts.findIndex(statePost => action.postId == statePost.id);
           return {
               ...state,
               posts : [
                   ...state.posts.slice(0,postIndex1),
                   ...state.posts.slice(postIndex1+1)
               ]
           }

        case "POST_CREATED":
            const newPostArray = state.posts;
            newPostArray.push(action.payload)
            return {
                ...state,
                posts : [
                    ...newPostArray
                ]
            }
        default:
            return state;
        }
    }

export default reducer;