import { Carousel } from '@mantine/carousel';
import { AiOutlineStar } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import { CardFooter, Card, CardBody, Image, Stack, Text, Heading, Divider, Button, ButtonGroup, } from '@chakra-ui/react';

function CarouselCard(data) {
  return (
    <Card maxW='sm'>
      <CardBody p="0" colorScheme="white">
        <Image
          src={data.product.image_src}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3' px="4">
          <Heading size='md'>{data.product.name}</Heading>
          <Text>
          {data.product.description}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Text pr="15%" color='blue.600' fontSize='2xl'>
            $ {data.product.price} TWD
        </Text>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            購買
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            購物車
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default CarouselCard;