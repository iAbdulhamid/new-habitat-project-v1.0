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