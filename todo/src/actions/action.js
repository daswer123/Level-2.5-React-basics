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

const selectedCategory = (categoryName) => {
    return {
        type : "SELECTED_CATEGORY",
        active: categoryName
    }
}

const postStatusToggle = (post) => {
    return {
        type: "POST_STATUS_TOGGLED",
        payload : post
    }
}

const postDelete = (id) => {
    return {
        type : "POST_DELETED",
        postId : id
    }
}

const postCreated = (post) => {
    return {
        type : "POST_CREATED",
        payload : post
    }
}

const CategoryCreated = (category) => {
    return {
        type : "CATEGORY_CREATED",
        payload : category
    }
}

const CategoryDelete = (label) => {
    return {
        type : "CATEGORY_DELETED",
        categoryLabel : label
    }
}

export {
    categoryLoaded,
    postsLoaded,
    selectedCategory,
    postStatusToggle,
    postDelete,
    postCreated,
    CategoryCreated,
    CategoryDelete
}