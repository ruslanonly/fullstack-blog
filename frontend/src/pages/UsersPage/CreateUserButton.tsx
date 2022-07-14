import React from 'react'

import { Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

export default function CreateUserButton() {
  return (
    <Button width={"min-content"} color="gray.100" bg="blue.500" _hover={{background: "blue.300"}} rightIcon={<AddIcon/>}>Create User </Button>
  )
}
