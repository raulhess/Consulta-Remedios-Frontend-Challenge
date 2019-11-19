export function setList ({commit}, payload) {
    if(payload && payload.products){
        commit('SET_LIST',payload)
    }
}
