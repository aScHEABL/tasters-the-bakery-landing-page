import React, { useContext } from "react";
import { Image, Flex, Box, Heading, Text, Button, Container } from "@chakra-ui/react";
import { AppContext } from "../AppContext"; 
import zhTwTranslation from "../language/zh-tw-lang.json";
import enUsTranslation from "../language/en-us-lang.json";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "./Logo";
import CarouselImage from "./CarouselImage";
import CarouselCard from "./CarouselCard";
import menu_TW from "../language/menu-zh-tw";
import menu_EN from "../language/menu-en-us";


function MenuPage() {
    const { state } = useContext(AppContext);
    const displayLanguage = state.language === "zh-tw" ? zhTwTranslation : enUsTranslation ;
    const menu = state.language === "zh-tw" ? menu_TW : menu_EN ;
    
    return (
        <Box w='100vw' minH='100vh' wrap="wrap">
            <Box width="100%" height="15%" />
            {/* <Box width="100%" height="40%">
                <CarouselImage />
            </Box> */}
            <Flex wrap="wrap" gap={10} justify="center">
                {menu.map((product) => (
                    <Flex width="20%" wrap="wrap" justify="center">
                        <CarouselCard product={product} />
                    </Flex>
                ))}
            </Flex>
        </Box>
    )
}

export default MenuPage;