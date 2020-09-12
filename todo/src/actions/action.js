const categoryLoaded = (categories) => {
    return {
        type: "CATEGORY_LOADED",
        payload : categories
    }
}

const postsLoaded = (posts) => {
    return {
        type: "POSTS_LOADED",
        payload : posts
    }
}

export {
    categoryLoaded,
    postsLoaded
}