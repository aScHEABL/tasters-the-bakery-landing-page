import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../AppContext"; 
import { Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,  
    Flex,
    Stack,
    CardBody,
    Heading,
    Text,
    CardFooter,
    Card,
    Image,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Box
    } from "@chakra-ui/react";
import zhTwTranslation from "../language/zh-tw-lang.json";
import enUsTranslation from "../language/en-us-lang.json";
import MobileNumberInput from "./MobileNumberInput";
import { v4 as uuidv4 } from 'uuid';

function ShoppingCart () {
    const { state, dispatch } = useContext(AppContext);
    const { isOpen, onOpen, onClose } = useContext(AppContext).disclosure;
    const [isMouseOver, setMouseOver] = useState(false);

    const btnRef = useRef();
    const displayLanguage = state.language === "zh-tw" ? zhTwTranslation : enUsTranslation ;
    
    const handleMouseEnter = (e) => {
        setMouseOver(true);
    }
    const handleMouseLeave = (e) => {
        setMouseOver(false);
    }
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
                    <DrawerHeader>{displayLanguage.shopping_cart_header}</DrawerHeader>
                    <DrawerBody>
                        <Flex wrap='wrap' w='100%' height='100%' gap={4} alignContent="flex-start">
                            {state.cart.map((product) => 
                                (
                                    <Flex
                                    borderRadius={6}
                                    rowgap={6}
                                    columnGap={6}
                                    width="100%"
                                    wrap="wrap"
                                    key={product.id}
                                    alignItems="flex-start"
                                    direction='row'
                                    overflow='hidden'
                                    variant='outline'
                                    align="center"
                                    backgroundColor="gray.600"
                                    py={2}
                                    px={2}
                                    height='15%'
                                    transition="all 0.2s ease-in-out"
                                    _hover={{
                                        height: '22%',
                                        
                                    }}
                                    onMouseEnter={(e) => handleMouseEnter(e)}
                                    onMouseLeave={(e) => handleMouseLeave(e)}
                                    >
                                        <Image
                                            objectFit='cover'
                                            maxW='100px'
                                            maxH='100px'
                                            src={product.image_src}
                                            alt='product image'
                                            borderRadius={6}
                                        />
                                        <Flex wrap='wrap' gap={4} width="70%">
                                            <Heading size='md' w='100%'>{state.language === 'zh-tw' ? product.name_TW : product.name_EN}</Heading>
                                            <Flex alignItems="center" justifyContent="flex-start" gap={4} >
                                                <Text fontSize='xl' flex="1 2 50%">Price: ${product.price}</Text>
                                                <MobileNumberInput product={product} />
                                            </Flex>
                                        </Flex>
                                            {isMouseOver ? 
                                                <Flex width="100%" justify="center" gap={4}>
                                                    <Button>1</Button>
                                                    <Button>2</Button>
                                                    <Text></Text>
                                                </Flex>
                                                 : 
                                                null
                                            }
                                    </Flex>
                                )
                            )}
                        </Flex>
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