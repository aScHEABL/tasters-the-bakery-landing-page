import React, { useContext, useEffect, useRef } from "react";
import { Image, Flex, Box, Heading, Text, Button, Container } from "@chakra-ui/react";
import { AppContext } from "../AppContext"; 
import zhTwTranslation from "../language/zh-tw-lang.json";
import enUsTranslation from "../language/en-us-lang.json";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../components/Logo";
import CarouselImage from "../components/CarouselImage";
import CarouselCard from "../components/CarouselCard";
import menu from "../language/menu";
import { v4 as uuidv4 } from 'uuid';

function MenuPage(props) {
    const { state, dispatch } = useContext(AppContext);
    const { isOpen, onOpen, onClose } = useContext(AppContext).disclosure;
    const btnRef = useRef();
    const displayLanguage = state.language === "zh-tw" ? zhTwTranslation : enUsTranslation ;
    
    const assignCommonId = (array) => {
        const updated_menu = array.map((product) => {
            return { ...product, id: uuidv4() };
        });
    
        return updated_menu;
    };

    const menu_with_id = assignCommonId(menu);
    
    useEffect(() => {
        dispatch({ type: 'UPDATE_MENU', payload: { menu_with_id } });
        console.log("Menu language updated");
    }, [state.language])
    return (
        <Box w='100vw' minH='100vh' wrap="wrap">
            <Box width="100%" height="15%" />
            {/* <Box width="100%" height="40%">
                <CarouselImage />
            </Box> */}
            <Flex wrap="wrap" gap={10} justify="center">
                {state.menu.map((product) => (
                    <Flex width="20%" wrap="wrap" justify="center" key={product.id}>
                        <CarouselCard product={product} onOpen={onOpen} btnRef={btnRef} />
                    </Flex>
                ))}
            </Flex>
        </Box>
    )
}

export default MenuPage;