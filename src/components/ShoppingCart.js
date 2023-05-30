import React from "react";
import { Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button  } from "@chakra-ui/react";

function ShoppingCart (props) {
    return (
            <Drawer
                isOpen={props.isOpen}
                placement='right'
                onClose={props.onClose}
                finalFocusRef={props.btnRef}
                >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader></DrawerHeader>
                    <DrawerBody></DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={props.onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
    )
}

export default ShoppingCart;