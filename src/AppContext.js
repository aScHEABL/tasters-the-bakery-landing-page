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
            const selectedItem = product
            // console.log(selectedItem);
            if (selectedItem) {
                const newItem = {
                ...selectedItem,
                quantity: 1 // You can set an initial quantity of 1 for the added item
                };

                return {
                ...state,
                cart: [
                    ...state.cart,
                    newItem
                ]
                };
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