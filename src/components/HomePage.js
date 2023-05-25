import React, { useContext } from "react";
import { Image, Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import { AppContext } from "../AppContext"; 
import zhTwTranslation from "../language/zh-tw-lang.json";
import enUsTranslation from "../language/en-us-lang.json";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

function HomePage() {
    const { state } = useContext(AppContext);
    const displayLanguage = state.language === "zh-tw" ? zhTwTranslation : enUsTranslation ;
    const navigate = useNavigate();

    return (
        <Flex w='100vw' h='100vh' position="relative" zIndex="1">
            <Logo />
            <Box w="100%" h="100%"
            bgImage="url('https://source.unsplash.com/m9pzwmxm2rk')"
            bgRepeat="no-repeat"
            bgPosition="center"
            backgroundSize="cover"
            opacity="0.2"
            position="absolute"
            zIndex="-1"></Box>
            <Flex position="absolute" left="10%" top="30%" width="50%" gap={8} wrap="wrap">
                <Heading as='h1' fontSize='6xl'>{displayLanguage.intro_h1_0}</Heading>
                <Text fontSize='lg'>{displayLanguage.intro_paragraph_0}</Text>
                <Button size="lg" colorScheme="teal" leftIcon={<AiOutlineShoppingCart />}
                as={Link} to='/menu'>{displayLanguage.nav_order_btn}</Button>
            </Flex>
        </Flex>
    )
}

export default HomePage;