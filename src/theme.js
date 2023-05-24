import { extendTheme } from "@chakra-ui/react"

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const colors = {
    orange: {
                50: '#ffefe0',
                100: '#f6d3ba',
                200: '#ecb793',
                300: '#e29c69',
                400: '#d97f40',
                500: '#bf6626',
                600: '#964f1d',
                700: '#6b3813',
                800: '#422107',
                900: '#1c0800',
            }
}

const theme = extendTheme({ 
    config,
    colors,
 });

export default theme;