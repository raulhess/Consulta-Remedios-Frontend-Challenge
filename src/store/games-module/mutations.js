import Vue from 'vue'

export function SET_LIST (state,payload) {
    state.products = payload.products
}

export function ADD_ITEM_CART (state,payload) {
    // antes de adicionar verifica se o item já está presente no carrinho
    let inCartItem = state.cart.find(item => item.id === payload.item.id)


    // caso já esteja no carrinho apenas aumenta a quantidade
    if(inCartItem){
        inCartItem.amount += 1
    }else{ // caso contrário cria um novo
        Vue.set(payload.item,'amount',1)
        state.cart.push(payload.item)
    }
}

export function REMOVE_ITEM_CART (state,payload) {
    // procura o item no carrinho antes de removê-lo
    let inCartItem = state.cart.find(item => item.id === payload.id)
    
    // caso tenha mais de um no carrinho apenas diminui a quantidade
    if(inCartItem.amount > 1){
        inCartItem.amount -= 1
    }else{ // caso contrário o remove
        state.cart = state.cart.filter((item) =>{
            return item.id !== payload.id
        })
    }
}
