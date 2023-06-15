import React, { useContext } from "react";
import { 
  Flex,
  NumberInput,
  NumberInputField,
  IconButton
 } from "@chakra-ui/react";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { AppContext } from "../AppContext";

const MobileNumberInput = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const productQuantity = state.cart[state.cart.findIndex((item) => item.id === props.product.id)].quantity;
  const handleClick = (clickAction, product) => {
    switch (clickAction) {
      case 'INCREMENT':
        dispatch({ type: 'UPDATE_PRODUCT_QUANTITY', payload: { id: product.id, quantity: product.quantity + 1 } });
        break;
      case 'DECREMENT':
        if (product.quantity === 1) return
        else dispatch({ type: 'UPDATE_PRODUCT_QUANTITY', payload: { id: product.id, quantity: product.quantity - 1 } });
        break;
      default:
        break;
    }
    console.log(state.cart);
  }


  return (
    <Flex as={NumberInput}
    value={productQuantity}
    max={999}
    min={1}
    keepWithinRange={true}
    clampValueOnBlur={true}
    flex="1 0 50%"
    gap={2}
    >
    <IconButton type="button" onClick={() => handleClick("INCREMENT", props.product )} icon={<BsPlus />} />
    <NumberInputField textAlign="center" p={0} />
    <IconButton type="button" onClick={() => handleClick("DECREMENT", props.product )} icon={<BiMinus />} />
  </Flex>
  )
}
  export default MobileNumberInput;