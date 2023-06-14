import React, { createContext, useReducer } from "react";
import { useDisclosure } from '@chakra-ui/react';

const AppContext = createContext();

const initialState = {
    language: "zh-tw",
    menu: [],
    cart: [],
}

function reducer(state, action) {
    switch (action.type) {
        case 'SWITCH_LANGUAGE':
            return {
                ...state,
                language: state.language === "zh-tw" ? "en-us" : "zh-tw",
            }

        case 'UPDATE_MENU':
            return {
                ...state,
                menu: action.payload.menu_with_id
            }
        
        case 'ADD_SHOPPING_CART':
            const { product } = action.payload;
            if (state.cart.some((item) => item.id === product.id)) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
                }
            } else {
                const newProduct = {
                        ...product,
                        quantity: 1
                        };
                        return {
                        ...state,
                        cart: [
                            ...state.cart,
                            newProduct
                        ]
                        };
            }
            
        case 'UPDATE_PRODUCT_QUANTITY':
            const productID = action.payload.id;
            const productQuantity = action.payload.quantity;
            return {
                ...state,
                cart: state.cart.map((item) => 
                item.id === productID ? { ...item, quantity: productQuantity } : item)
            }
        default:
            return state;
    }
}

function AppContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const contextValue = {
        state,
        dispatch,
        disclosure: {
          isOpen,
          onOpen,
          onClose,
        },
      };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider }