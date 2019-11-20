export function subTotal (state) {
    let sum = 0
    for(let cartItem of state.cart){
        sum += cartItem.price * cartItem.amount
    }
    return sum
}

export function cartItemsAmount (state) {
    let amount = 0
    for(let item of state.cart){
        amount += item.amount
    }
    return amount
}

export function shipping (state, getters) {
    if(getters.subTotal >= 250) return 0
    
    return getters.cartItemsAmount * 10
}

export function total (state, getters) {
    return getters.shipping + getters.subTotal
}