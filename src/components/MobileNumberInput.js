import React, { useState } from "react";
import { 
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  IconButton
 } from "@chakra-ui/react";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";


const MobileNumberInput = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  }
  const handleDecrement = () => {
    setQuantity((prev) => prev - 1);
  }
  return (
    <Flex as={NumberInput}
    value={quantity}
    max={999}
    min={1}
    keepWithinRange={true}
    clampValueOnBlur={true}
    onChange={(valueString) => setQuantity(+(valueString))}
    flex="1 0 50%"
    gap={2}
    >
    <IconButton type="button" onClick={handleIncrement} icon={<BsPlus />} />
    <NumberInputField textAlign="center" />
    <IconButton type="button" onClick={handleDecrement} icon={<BiMinus />} />
  </Flex>
  )
}
  export default MobileNumberInput;