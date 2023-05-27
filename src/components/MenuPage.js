import React, { useContext, useEffect } from "react";
import { Image, Flex, Box, Heading, Text, Button, Container } from "@chakra-ui/react";
import { AppContext } from "../AppContext"; 
import zhTwTranslation from "../language/zh-tw-lang.json";
import enUsTranslation from "../language/en-us-lang.json";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "./Logo";
import CarouselImage from "./CarouselImage";
import CarouselCard from "./CarouselCard";
import menu_A from "../language/menu-zh-tw";
import menu_B from "../language/menu-en-us";
import { v4 as uuidv4 } from 'uuid';


function MenuPage() {
    const { state, dispatch } = useContext(AppContext);
    const displayLanguage = state.language === "zh-tw" ? zhTwTranslation : enUsTranslation ;
    
    const assignCommonId = (array1, array2) => {
        const menu_TW = array1.map((obj) => {
            return { ...obj, id: uuidv4() };
        });
        
        const menu_EN = array2.map((obj) => {
            return { ...obj, id: uuidv4() };
        });
    
        return { menu_TW, menu_EN };
    };

    const { menu_TW, menu_EN } = assignCommonId(menu_A, menu_B);
    const menu = state.language === "zh-tw" ? menu_TW : menu_EN ;
    
    useEffect(() => {
        dispatch({ type: 'UPDATE_MENU', payload: { menu } });
        console.log("Menu language updated");
    }, [state.language])
    return (
        <Box w='100vw' minH='100vh' wrap="wrap">
            <Box width="100%" height="15%" />
            {/* <Box width="100%" height="40%">
                <CarouselImage />
            </Box> */}
            <Flex wrap="wrap" gap={10} justify="center">
                {menu.map((product, index) => (
                    <Flex width="20%" wrap="wrap" justify="center" key={uuidv4()}>
                        <CarouselCard product={product} index={index} />
                    </Flex>
                ))}
            </Flex>
        </Box>
    )
}

export default MenuPage;