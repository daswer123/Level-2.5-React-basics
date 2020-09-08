const menuLoaded = (newMenu) => {
    return {
        type : "MENU_LOADED",
        payloaded : newMenu
    }
}

export {
    menuLoaded
}