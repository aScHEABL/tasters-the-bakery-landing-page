import React, { useContext, useRef } from "react";
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
    } from "@chakra-ui/react";
import zhTwTranslation from "../language/zh-tw-lang.json";
import enUsTranslation from "../language/en-us-lang.json";
import MobileNumberInput from "./MobileNumberInput";

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
                    <DrawerHeader>{displayLanguage.shopping_cart_header}</DrawerHeader>
                    <DrawerBody>
                        <Flex wrap='wrap' w='100%' gap={4}>
                            {state.cart.map((product) => 
                                (
                                    <Card
                                    direction='row'
                                    overflow='hidden'
                                    variant='outline'
                                    width='100%'
                                    align="center"
                                    backgroundColor="gray.600"
                                    transition="transform 1s ease-in-out"
                                    _hover={{
                                        
                                        
                                    }}
                                    >
                                        <Image
                                            objectFit='cover'
                                            maxW='100px'
                                            maxH='100px'
                                            src={product.image_src}
                                            alt='product image'
                                        />
                                        <Flex as={CardBody} wrap='wrap' gap={4}>
                                            <Heading size='md' w='100%'>{product.name}</Heading>
                                            <Flex alignItems="center" justifyContent='space-between'>
                                                <Text>Price: ${product.price}</Text>
                                                <MobileNumberInput />
                                            </Flex>
                                        </Flex>
                                    </Card>
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