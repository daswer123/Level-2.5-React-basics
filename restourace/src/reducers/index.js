import RestoService from '../services/resto-service';
const restoService = new RestoService();

const initialState = {
    menu : [],
    loading : true,
    items : [],
    total : 0
}

function reducer(state = initialState,action) {
    switch(action.type){
        case "MENU_LOADED":
            return {
                ...state,
                menu: action.payloaded,
                loading : false
            }
        case "MENU_REQUESTED":
            return {
                ...state,
                menu : state.menu,
                loading : true
            }
        case "MENU_WRONG":
            return {
                ...state,
                error : true
            }
        case "ITEM_ADDED_TO_CART":
            const id = action.payloaded;
            const item = state.menu.find(item => item.id == id);
            const isItemHere = state.items.findIndex(elem => elem.id == item.id)


            if(isItemHere > -1){
                const realItem = {
                    ...state.items[isItemHere],
                    count : state.items[isItemHere].count + 1,
                    price : state.items[isItemHere].price + state.items[isItemHere].priceOne
                }
                return {
                    ...state,
                    total : state.total + realItem.priceOne,
                    items: [
                        ...state.items.slice(0,isItemHere),
                        realItem,
                        ...state.items.slice(isItemHere+1)
                    ]
                }
                

            }

            const newItem = {
                title: item.title,
                price: item.price,
                priceOne : item.price,
                url:   item.url,
                id:    item.id,
                count : 0
            }
            return {
                ...state,
                total : state.total + newItem.price,
                items: [
                    ...state.items,
                    newItem
                ]
            }
        case "ITEM_DELETED_FROM_CART":
            const idx = action.payloaded;
            const index = state.items.findIndex(item => item.id == idx);
            return {
                ...state,
                total : state.total - ( (state.items[index].count + 1) * state.items[index].priceOne),
                items : [
                    ...state.items.slice(0,index),
                    ...state.items.slice(index+1)
                ]
            }
        
        case "ADD_ONE_ITEM":
            const idr = action.payloaded;
            const itemr = state.menu.find(item => item.id == idr);
            const itemHere = state.items.findIndex(elem => elem.id == itemr.id)
            const realItem = {
                    ...state.items[itemHere],
                    count : state.items[itemHere].count + 1,
                    price : state.items[itemHere].price + state.items[itemHere].priceOne
                }
                return {
                    ...state,
                    total : state.total + realItem.priceOne,
                    items: [
                        ...state.items.slice(0,itemHere),
                        realItem,
                        ...state.items.slice(itemHere+1)
                    ]
                }
        
            case "REMOVE_ONE_ITEM":
                    const idrx = action.payloaded;
                    const itemrx = state.menu.find(item => item.id == idrx);
                    const itemHerex = state.items.findIndex(elem => elem.id == itemrx.id)
                    const realItemx = {
                            ...state.items[itemHerex],
                            count : state.items[itemHerex].count -1,
                            price : state.items[itemHerex].price - state.items[itemHerex].priceOne
                        }
                    if (realItemx.count == -1){
                        return {
                            ...state,
                            total : state.total - realItemx.priceOne,
                            items: [
                                ...state.items.slice(0,itemHerex),
                                ...state.items.slice(itemHerex+1)
                            ] 
                        }
                    }

                        return {
                            ...state,
                            total : state.total - realItemx.priceOne,
                            items: [
                                ...state.items.slice(0,itemHerex),
                                realItemx,
                                ...state.items.slice(itemHerex+1)
                            ]
                        }
            
            case "MAKE_ORDER":
             let allData = [];
             state.items.forEach(item => {
                 let itemData = {
                     title : item.title,
                     price : item.price,
                     priceOne : item.priceOne,
                     count : item.count+1
                 }
                 allData.push(itemData)
             })
             allData.push({"total" : state.total})
             
             restoService.PostData(JSON.stringify(allData))

             return {
                 ...state,
                 items : [],
                 total : 0
             }

        default:
            return state;
    }
}
export default reducer

