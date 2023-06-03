import React, { useContext, useRef } from "react";
import { AppContext } from "../AppContext"; 
import { Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button  } from "@chakra-ui/react";
import zhTwTranslation from "../language/zh-tw-lang.json";
import enUsTranslation from "../language/en-us-lang.json";


function ShoppingCart (props) {
    const { state, dispatch } = useContext(AppContext);
    const { isOpen, onOpen, onClose } = useContext(AppContext).disclosure;
    const btnRef = useRef();
    const displayLanguage = state.language === "zh-tw" ? zhTwTranslation : enUsTranslation ;
    return (
            <Drawer
                size='md'
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>購物車</DrawerHeader>
                    <DrawerBody>

                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
    )
}

export default ShoppingCart;