import { useEffect } from "react";
import { useState } from "react";
import { useLocalStorage } from "../utils/useLocalstorage";
import { BackgroundProvider } from "./utils/BackgroudProvider";
import { makeStore } from "./utils/makestrore";

// Theme config
const Themes = {
    white: {
        name: 'white',
        rootBg: '#fff'
    },
    gray100: {
        name: 'black',
        rootBg: '#000'
    }
}

// Theme provider and actions

const actionTypesThemeProvider = {
    TOGGLE: 'toggle'
}

const { Provider: ThemeProvider, useContextStore: useThemeState, useContextDispatch: useThemeDispatch, useStoreAndDispatch: useTheme } = makeStore('Theme', (state, action) => {
    if (action.type === actionTypesThemeProvider.TOGGLE) {
        return state === Themes.white ? Themes.gray100.name : Themes.white.name
    }
    return state;
});

// Them provider actions
const toggleThemeDispather = (dispatch) => dispatch({ type: actionTypesThemeProvider.TOGGLE })


// Root level design system provider
const getTheme = (defaultTheme) => {
    try {
        const themeName = JSON.parse(window.localStorage.getItem('_THEME_'));
        if (!Themes[themeName]) {
            return defaultTheme;
        }
        return Themes[themeName];
    }
    catch(e) {
        return defaultTheme;
    }
}

function DesignSystemRoot({ children }) {
    const activeThemeName = useThemeState();
    return <BackgroundProvider initilizerArg={Themes[activeThemeName].rootBg}>
        {children}
    </BackgroundProvider>
}

function DesignSystem({children}) {
    return <ThemeProvider initilizerArg={Themes.white.name} initilizer={getTheme}>
        <DesignSystemRoot>
            {children}
        </DesignSystemRoot>
    </ThemeProvider>
}


export {
    DesignSystem,
    useThemeState,
    useThemeDispatch,
    useTheme,
    toggleThemeDispather,
}