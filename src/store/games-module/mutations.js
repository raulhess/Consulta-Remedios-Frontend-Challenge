export function SET_LIST (state,payload) {
    state.products = payload.products
}

export function ADD_ITEM_CART (state,payload) {
    state.cart.push(payload.item)
}

export function REMOVE_ITEM_CART (state,payload) {
    state.cart = state.cart.filter((item) =>{
        return item.id !== payload.id
    })
}
