import React, { useContext } from "react";
import { Image, Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import { AppContext } from "../AppContext"; 
import zhTwTranslation from "../language/zh-tw-lang.json";
import enUsTranslation from "../language/en-us-lang.json";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "./Logo";

function MenuPage() {
    const { state } = useContext(AppContext);
    const displayLanguage = state.language === "zh-tw" ? zhTwTranslation : enUsTranslation ;
    return (
        <Flex w='100vw' h='100vh' zIndex="1">
            <Flex justify="center" width="100%">
                <Logo />
            </Flex>
        </Flex>
    )
}

export default MenuPage;