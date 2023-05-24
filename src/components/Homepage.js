import React, { useContext } from "react";
import { Image, Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import { AppContext } from "../AppContext"; 
import zhTwTranslation from "../language/zh-tw-lang.json";
import enUsTranslation from "../language/en-us-lang.json";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Homepage() {
    const { state } = useContext(AppContext);
    const displayLanguage = state.language === "zh-tw" ? zhTwTranslation : enUsTranslation ;
    return (
        <Flex w='100vw' h='100vh' position="relative" zIndex="1">
            <Box w="100%" h="100%"
            bgImage="url('https://cdn.imweb.me/upload/S202102197ebdf7f722b03/8b5a635481540.jpg')"
            bgRepeat="no-repeat"
            bgPosition="center"
            backgroundSize="cover"
            opacity="0.2"
            position="absolute"
            zIndex="-1"></Box>
            <Flex position="absolute" left="10%" top="30%" width="50%" gap={8} wrap="wrap">
                <Heading as='h1' fontSize='6xl'>{displayLanguage.intro_h1_0}</Heading>
                <Text fontSize='lg'>{displayLanguage.intro_paragraph_0}</Text>
                <Button colorScheme="teal" leftIcon={<AiOutlineShoppingCart />}>{displayLanguage.order_now_btn}</Button>
            </Flex>
        </Flex>
    )
}

export default Homepage;