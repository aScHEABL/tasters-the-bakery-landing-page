import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'black.700',
                color: 'dark'
            }
        }
    },
})

export default theme;