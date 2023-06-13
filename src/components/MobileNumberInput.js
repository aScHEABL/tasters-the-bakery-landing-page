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
  const handleClick = (clickAction, product) => {
    const selectedProduct = state.cart.find((item) => item.id === product.id);
    switch (clickAction) {
      case 'INCREMENT':
        dispatch({ type: 'UPDATE_PRODUCT_QUANTITY', payload: { id: product.id, quantity: selectedProduct.quantity + 1 } });
        break;
      case 'DECREMENT':
        dispatch({ type: 'UPDATE_PRODUCT_QUANTITY', payload: { id: product.id, quantity: selectedProduct.quantity - 1 } });
        break;
      default:
        break;
    }
    console.log(state.cart);
  }

  const handleChange = (valueString, product) => {;
    dispatch({ type: 'UPDATE_PRODUCT_QUANTITY', payload: { id: product.id, quantity: +valueString } })
  }

  return (
    <Flex as={NumberInput}
    value={state.cart[state.cart.findIndex((item) => item.id === props.product.id)].quantity}
    max={999}
    min={1}
    keepWithinRange={true}
    clampValueOnBlur={true}
    onChange={(valueString) => handleChange(+(valueString), props.product)}
    flex="1 0 50%"
    gap={2}
    >
    <IconButton type="button" onClick={() => handleClick("INCREMENT", props.product )} icon={<BsPlus />} />
    <NumberInputField textAlign="center" />
    <IconButton type="button" onClick={() => handleClick("DECREMENT", props.product )} icon={<BiMinus />} />
  </Flex>
  )
}
  export default MobileNumberInput;