export function setList ({commit}, payload) {
    if(payload && payload.products){
        commit('SET_LIST', payload)
    }
}

export function addItemCart({commit}, payload) {
    if(payload && payload.item){
        commit('ADD_ITEM_CART', payload)
    }
}

export function removeItemCart({commit}, payload) {
    console.log(payload)
    if(payload && payload.id){
        commit('REMOVE_ITEM_CART', payload)
    }
}
