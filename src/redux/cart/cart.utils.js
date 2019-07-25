export const removeItemFromCart = (cartItems, itemToRemove) => {

    const isExist = cartItems.find(
        cartItem => cartItem.id === itemToRemove.id
    );

    if(isExist.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id );
    } else {
        return cartItems.map(cartItem => 
            cartItem.id === itemToRemove.id 
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        
    }
};

export const addItemToCart = (cartItems, itemToAdd) => {

    const isExist = cartItems.find(
        cartItem => cartItem.id === itemToAdd.id
    );

    if(isExist) {
        // we need to return a new array => map()
        return cartItems.map(cartItem => 
            cartItem.id === itemToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem 
        );
    } else {
        return [...cartItems, {...itemToAdd, quantity: 1}]
    }
};