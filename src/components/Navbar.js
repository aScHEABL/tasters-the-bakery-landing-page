import React, { useContext } from "react";
import { Flex, Button, IconButton, useDisclosure, Box,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, } from "@chakra-ui/react";
import { MdLanguage } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AppContext } from "../AppContext"; 
import zhTwTranslation from "../language/zh-tw-lang.json";
import enUsTranslation from "../language/en-us-lang.json";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
// import { ColorModeSwitcher } from "../ColorModeSwitcher";

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const { state, dispatch } = useContext(AppContext);
    const displayLanguage = state.language === "zh-tw" ? zhTwTranslation : enUsTranslation ;
    const location = useLocation();
    const navigate = useNavigate();

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
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader></DrawerHeader>
                    <DrawerBody></DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default Navbar;