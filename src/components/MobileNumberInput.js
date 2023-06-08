import { useNumberInput, Flex, Button, Input } from "@chakra-ui/react"

const MobileNumberInput = () => {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
        step: 1,
        defaultValue: 1,
        min: 1,
        max: 999,
        precision: 0,
      })
  
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()
  
    return (
      <Flex flex="1 0 50%">
        <Button {...inc}>+</Button>
        <Input textAlign="center" {...input} />
        <Button {...dec}>-</Button>
      </Flex>
    )
  }

  export default MobileNumberInput;