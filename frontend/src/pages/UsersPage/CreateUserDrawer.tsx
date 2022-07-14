import React, { useRef } from 'react'
import axios, { AxiosResponse } from 'axios';

import { 
  Stack,
  Box,
  FormLabel,
  Input,
  Button, 
  Drawer, 
  DrawerOverlay, 
  DrawerContent, 
  DrawerCloseButton, 
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

import { IUser } from '../../types';
import { useIsPresent } from 'framer-motion';

export default function CreateUserDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const onCreateNewUser = async () => {
    axios({
      method: "post",
      url: "/api/createuser",
      data: {
        username: usernameRef.current?.value,
        email: emailRef.current?.value
      }
    })
    .then((response: AxiosResponse<IUser>) => {
      console.log(response);
      onClose();
    })
    .catch((error) => console.log(error));
  }

  return (
    <>
      <Button 
        p={3}
        m={3}
        justifySelf="flex-end"
        width={"min-content"} 
        color="gray.100" 
        bg="blue.500" 
        _hover={{background: "blue.300"}} 
        rightIcon={<AddIcon/>}
        onClick={onOpen}>Create User</Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent
          height={"min-content"}
          mr={10} 
          my={10} 
          borderRadius="10">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Create a new user
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px' pb="5" alignContent="center">
              <Box>
                <FormLabel htmlFor='username'>Username</FormLabel>
                <Input
                  ref={usernameRef}
                  id='username'
                  placeholder='Please enter user name'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                  id='email'
                  ref={emailRef}
                  placeholder='Please enter email'
                />
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth='1px'>
            <Button 
              variant='outline' 
              mr={3}>
              Cancel
            </Button>
            <Button 
              colorScheme='blue'
              onClick={() => onCreateNewUser()}>
            Create
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
