import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import zhTwTranslation from "../language/zh-tw-lang.json";
import enUsTranslation from "../language/en-us-lang.json";
import { AiOutlineStar } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import { CardFooter, Card, CardBody, Image, Stack, Text, 
  Heading, Button, ButtonGroup, LightMode,
  useDisclosure, Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, 
    DarkMode} from '@chakra-ui/react';

function CarouselCard(data) {
  const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  const { state } = useContext(AppContext);
  const displayLanguage = state.language === "zh-tw" ? zhTwTranslation : enUsTranslation ;

  const handleClick = () => {
    
  }
  return (
    <LightMode>
      <Card size="md">
        <CardBody p="0" colorScheme="white">
          <Image
            src={data.product.image_src}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3' px="4">
            <Heading size='md'>{data.product.name}</Heading>
            <Text color="gray.600">
              {data.product.description}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Text pr="15%" fontSize='2xl'>
              {data.product.price} $ TWD
          </Text>
          <Button size='lg' variant='solid' colorScheme='blue' ref={btnRef}
          onClick={onOpen}>
            {displayLanguage.shopping_cart_btn}
          </Button>
        </CardFooter>
      </Card>
      <DarkMode>
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
            </DarkMode>
    </LightMode>
  )
}

export default CarouselCard;