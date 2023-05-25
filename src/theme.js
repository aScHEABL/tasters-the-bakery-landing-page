import { extendTheme } from "@chakra-ui/react";
import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

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

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
// define the part you're going to style
container: {
    backgroundColor: '#e7e7e7',
    display: "flex",
    gap: "8px"
},
header: {
    
},
body: {
    
},
footer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
},
})

const sizes = {
md: definePartsStyle({
    container: {
    borderRadius: '8px',
    },
}),
}

const cardTheme = defineMultiStyleConfig({ baseStyle, sizes })

const theme = extendTheme({ 
    config,
    colors,
    components: {
        Card: cardTheme,
      },
 });

export default theme;