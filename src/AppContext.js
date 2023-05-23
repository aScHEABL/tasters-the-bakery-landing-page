import React, { createContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
    language: "zh-tw",
}

function reducer(state, action) {
    switch (action.type) {
        case 'SWITCH_LANGUAGE':
            return {
                ...state,
                language: state.language === "zh-tw" ? "en-us" : "zh-tw",
            }
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