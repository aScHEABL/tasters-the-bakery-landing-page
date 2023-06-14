import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import zhTwTranslation from "../language/zh-tw-lang.json";
import enUsTranslation from "../language/en-us-lang.json";
import menu_TW from "../language/menu-zh-tw";
import menu_EN from "../language/menu-en-us";
import { CardFooter, Card, CardBody, Image, Stack, Text, 
  Heading, Button, LightMode,
} from '@chakra-ui/react';

function CarouselCard(props) {
  const { state, dispatch } = useContext(AppContext);
  const displayLanguage = state.language === "zh-tw" ? zhTwTranslation : enUsTranslation ;

  const handleClick = (product) => {
    dispatch({ type: 'ADD_SHOPPING_CART', payload: { product } })
  }
  return (
    <LightMode>
      <Card size="md">
        <CardBody p="0">
          <Image
            src={props.product.image_src}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3' px="4">
            <Heading size='md'>
              {state.language === 'zh-tw' ? props.product.name_TW : props.product.name_EN}
            </Heading>
            <Text color="gray.600">
              {state.language === 'zh-tw' ? props.product.description_TW : props.product.description_EN}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Text pr="15%" fontSize='2xl'>
              {props.product.price} $ TWD
          </Text>
          <Button size='lg' variant='solid' colorScheme='blue' ref={props.btnRef}
          onClick={() =>{ props.onOpen(); handleClick(props.product) }}>
            {displayLanguage.shopping_cart_btn}
          </Button>
        </CardFooter>
      </Card>
    </LightMode>
  )
}

export default CarouselCard;