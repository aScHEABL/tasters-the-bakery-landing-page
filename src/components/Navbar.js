import React, { useContext } from "react";
import { Flex, Button } from "@chakra-ui/react";
import { MdLanguage } from "react-icons/md";
import { AppContext } from "../AppContext"; 
import zhTwTranslation from "../language/zh-tw-lang.json";
import enUsTranslation from "../language/en-us-lang.json";

function Navbar() {
    const { state, dispatch } = useContext(AppContext);
    const displayLanguage = state.language === "zh-tw" ? zhTwTranslation : enUsTranslation ;

    const handleLanguageSwitch = () => {
        dispatch({ type: 'SWITCH_LANGUAGE' });
    }
    
    return (
        <Flex pos='fixed' top='0' left='0%' right='10%' as='nav' justify='flex-end' zIndex={1} w={{
            sm: '30em', // 480px
            md: '48em', // 768px
            lg: '62em', // 992px
            xl: '80em', // 1280px
            '2xl': '96em', // 1536px
        }}>
            {state.language === "zh-tw" ? 
                <Button size='lg' leftIcon={<MdLanguage />} colorScheme='gray' variant='ghost' onClick={handleLanguageSwitch}>
                    English
                </Button>
                :
                <Button size='lg' leftIcon={<MdLanguage />} colorScheme='gray' variant='ghost'  onClick={handleLanguageSwitch}>
                    中文
                </Button>
            }
            <Button size='lg' colorScheme='gray' variant='ghost'>{displayLanguage.nav_intro_btn}</Button>
            <Button size='lg' colorScheme='gray' variant='ghost'>{displayLanguage.nav_product_btn}</Button>
            <Button size='lg' colorScheme='gray' variant='ghost'>{displayLanguage.nav_gallery_btn}</Button>
            <Button size='lg' colorScheme='gray' variant='ghost'>{displayLanguage.nav_order_btn}</Button>
            <Button size='lg' colorScheme='gray' variant='ghost'>{displayLanguage.nav_contact_btn}</Button>
        </Flex>
    )
}

export default Navbar;