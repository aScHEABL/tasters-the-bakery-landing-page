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
        <Flex w='100vw' h='100vh'>
            {/* <Flex width="100%" height="40%" position="relative" top="20%" bgColor="white" justify="center">
                <Image objectFit="cover" width="100%" objectPosition="center" src="https://cdn.discordapp.com/attachments/1110904435569332305/1110911791476785162/00006-3705878774.png" />
            </Flex> */}
            <Carousel />
        </Flex>
    )
}

export default MenuPage;