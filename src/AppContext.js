import React, { createContext, useReducer } from "react";

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
                menu: action.payload.menu
            }
        
        case 'ADD_SHOPPING_CART':
            const { index } = action.payload;
            const selectedItem = state.menu[index];
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
            break;
        default:
            return state;
    }
}

function AppContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider }