export function subTotal (state) {
    let sum = 0
    for(let cartItem of state.cart){
        sum += cartItem.price
    }
    return sum
}

export function shipping (state, getters) {
    if(getters.subTotal >= 250) return 0
    
    return state.cart.length * 10
}

export function total (state, getters) {
    return getters.shipping + getters.subTotal
}