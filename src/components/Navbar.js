import React, { useContext, useRef } from "react";
import { Flex, Button, IconButton,  } from "@chakra-ui/react";
import { MdLanguage } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AppContext } from "../AppContext"; 
import zhTwTranslation from "../language/zh-tw-lang.json";
import enUsTranslation from "../language/en-us-lang.json";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// import { ColorModeSwitcher } from "../ColorModeSwitcher";

function Navbar(props) {
    const { state, dispatch } = useContext(AppContext);
    const { isOpen, onOpen, onClose } = useContext(AppContext).disclosure;
    const btnRef = useRef();
    const displayLanguage = state.language === "zh-tw" ? zhTwTranslation : enUsTranslation ;
    const location = useLocation();

    const renderLogo = () => {
        switch (location.pathname) {
            case "/":
                return null;
            case "/menu":
                return <Logo />;
            default:
                return null;
        }
    }

    const handleLanguageSwitch = () => {
        dispatch({ type: 'SWITCH_LANGUAGE' });
    }
    
    return (
        <Flex height="10%" py={4} pos='absolute' top='0' left='0%' right='0%' as='nav' justify='flex-end' zIndex="10" w={{
            sm: '30em', // 480px
            md: '48em', // 768px
            lg: '62em', // 992px
            xl: '80em', // 1280px
            '2xl': '96em', // 1536px
        }}>
            {renderLogo()}
            {state.language === "zh-tw" ? 
                <Button size='lg' leftIcon={<MdLanguage />} colorScheme='gray' variant='ghost' onClick={handleLanguageSwitch}>
                    English
                </Button>
                :
                <Button size='lg' leftIcon={<MdLanguage />} colorScheme='gray' variant='ghost'  onClick={handleLanguageSwitch}>
                    中文
                </Button>
            }
            {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
            <Button size='lg' colorScheme='gray' variant='ghost' as={Link} to='/'>{displayLanguage.nav_home_btn}</Button>
            {/* <Button size='lg' colorScheme='gray' variant='ghost'>{displayLanguage.nav_product_btn}</Button> */}
            <Button size='lg' colorScheme='gray' variant='ghost'>{displayLanguage.nav_gallery_btn}</Button>
            <Button size='lg' colorScheme='gray' variant='ghost'>{displayLanguage.nav_intro_btn}</Button>
            <Button size='lg' colorScheme='gray' variant='ghost'>{displayLanguage.nav_contact_btn}</Button>
            <IconButton colorScheme="teal" icon={<AiOutlineShoppingCart />}
            ref={btnRef} onClick={onOpen} />
        </Flex>
    )
}

export default Navbar;