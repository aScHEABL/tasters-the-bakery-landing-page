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
            if (state.cart.some((item) => item.id === action.payload.product.id)) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                    item.id === action.payload.product.id ? { ...item, quantity: item.quantity + 1 } : item)
                }
            } else {
                const newProduct = {
                        ...action.payload.product,
                        quantity: 1,
                        totalPrice: action.payload.product.price
                        };
                        return {
                        ...state,
                        cart: [
                            ...state.cart,
                            newProduct
                        ]
                        };
            }

        case 'REMOVE_SHOPPING_CART':
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.product.id)
            }
            
        case 'UPDATE_PRODUCT_QUANTITY':
            return {
                ...state,
                cart: state.cart.map((item) => 
                item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item)
            }

        case 'UPDATE_PRODUCT_TOTAL_PRICE':
            return {
                ...state,
                cart: state.cart.map((item) =>
                item.id === action.payload.id ? { ...item, totalPrice: action.payload.totalPrice } : item)
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