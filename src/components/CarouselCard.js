import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import zhTwTranslation from "../language/zh-tw-lang.json";
import enUsTranslation from "../language/en-us-lang.json";
import { Carousel } from '@mantine/carousel';
import { AiOutlineStar } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import { CardFooter, Card, CardBody, Image, Stack, Text, Heading, Divider, Button, ButtonGroup, LightMode, } from '@chakra-ui/react';

function CarouselCard(data) {
  const { state } = useContext(AppContext);
  const displayLanguage = state.language === "zh-tw" ? zhTwTranslation : enUsTranslation ;
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
          <Button size='lg' variant='solid' colorScheme='blue'>
            {displayLanguage.shopping_cart_btn}
          </Button>
        </CardFooter>
      </Card>
    </LightMode>
  )
}

export default CarouselCard;