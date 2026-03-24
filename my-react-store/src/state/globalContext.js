import {createContext} from "react";

const GlobalContext = createContext ({
    cart: [], // default car is empty array, will hold product objects later.
    user: {}, // default user is an empty obj, can store user info like name, email etc.

    addProductToCart: () => {}, // placeholder function to add a product to the cart
    clearCart: () => {}, //placeholder function to remove all items from the cart
    removeProductFromCart: () => {} // Placeholder function to remove a specific item from the cart
})
// Export the context so it can be use in another components
export default GlobalContext

