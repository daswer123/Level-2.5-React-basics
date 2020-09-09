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

export {
    menuLoaded,
    menuCreated,
    menuWrong
}