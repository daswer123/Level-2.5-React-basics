const menuLoaded = (newMenu) => {
    return {
        type : "MENU_LOADED",
        payloaded : newMenu,
    }
}

const menuCreated = () => {
    return {
        type : "MENU_REQUESTED"
    }
}

const menuWrong = () => {
    return {
        type : "MENU_WRONG"
    }
}

const addToCart = (id) => {
    return {
        type : "ITEM_ADDED_TO_CART",
        payloaded : id
    }
}

const removeFromCart = (id) => {
    return {
        type : "ITEM_DELETED_FROM_CART",
        payloaded : id
    }
}

const addOneItem = (id) => {
    return {
        type: "ADD_ONE_ITEM",
        payloaded: id
    }
}

const removeOneItem = (id) => {
    return {
        type: "REMOVE_ONE_ITEM",
        payloaded: id
    }
}

const makeOrder = () => {
    return {
        type : "MAKE_ORDER"
    }
}

export {
    menuLoaded,
    menuCreated,
    menuWrong,
    addToCart,
    removeFromCart,
    addOneItem,
    removeOneItem,
    makeOrder
}