import React, { useContext } from "react";
import { Image, Flex, Box, Heading, Text } from "@chakra-ui/react";
import { AppContext } from "../AppContext"; 
import zhTwTranslation from "../language/zh-tw-lang.json";
import enUsTranslation from "../language/en-us-lang.json";

function Homepage() {
    const { state } = useContext(AppContext);
    const displayLanguage = state.language === "zh-tw" ? zhTwTranslation : enUsTranslation ;
    return (
        <Flex p={16} w='100vw' h='100vh'
        bgImage="url('https://cdn.imweb.me/upload/S202102197ebdf7f722b03/8b5a635481540.jpg')"
        bgRepeat='no-repeat'
        bgPosition='center'
        backgroundSize='cover'
        _after={{ backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "absolute", content: '" "',
        top: "0", right: "0", bottom: "0", left: "0" }}
        >
            <Heading as='h1'>{displayLanguage.intro_h1_0}</Heading>
            <Text>{displayLanguage.intro_paragraph_0}</Text>
        </Flex>
    )
}

export default Homepage;