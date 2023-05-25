import React, { useContext } from "react";
import { Image, Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import { AppContext } from "../AppContext"; 
import zhTwTranslation from "../language/zh-tw-lang.json";
import enUsTranslation from "../language/en-us-lang.json";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "./Logo";
import Carousel from "./Carousel";


function MenuPage() {
    const { state } = useContext(AppContext);
    const displayLanguage = state.language === "zh-tw" ? zhTwTranslation : enUsTranslation ;
    return (
        <Box w='100vw' minH='100vh' wrap="wrap">
            <Box width="100%" height="15%" />
            <Box width="100%" height="50%">
                <Carousel />
            </Box>
            <Flex wrap="wrap" justify="center">
                
            </Flex>
        </Box>
    )
}

export default MenuPage;