export const addToCart = (id) => ({
    type: 'ADD_TO_CART',
    payload: id
})

export const clearAll = () => ({
    type: 'CLEAR_ALL',
})

export const removeItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id
})