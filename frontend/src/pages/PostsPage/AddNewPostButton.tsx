import React, { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'

import { Box, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Stack, FormLabel, Input, Select, forwardRef } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

import { IUser } from '../../types'

import { UpdatePostsContext } from './UpdatePostsContext'

export type Ref = React.Ref<HTMLSelectElement>;

const SelectUsers = forwardRef ((props, ref) => {
  const [users, setUsers] = useState<IUser[]>([] as IUser[]);
  const [selected, setSelected] = useState<string>("");

  const getUsers = () => {
    axios.get("/api/users")
    .then((res) => {
      setUsers(res.data);
    })
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <select 
    ref={ref} 
    value={selected} 
    placeholder="Select post's author"
    onChange={(e) => setSelected(e.target.value)}>
      {
        users.map((user) => (
          <option key={user.id} value={user.id} >{user.username}</option>
        ))
      }
    </select>
  )
});


export default function AddNewPostButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const updatePosts = useContext(UpdatePostsContext)

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLSelectElement>();

  const onCreate = () => {
    let title = titleRef.current?.value
    let content = contentRef.current?.value;
    let userId = authorRef.current?.value;
    axios.post("/api/createpost", {
      title: title,
      content: content,
      user_id: userId
    });
    updatePosts(true);
    onClose();
  }
  return (
    <>
      <div className="post" onClick={onOpen}>
        <Box display={"flex"} justifyContent="center" alignItems="center">
          <AddIcon boxSize={"2rem"} color="blue" opacity={.15}/>
        </Box>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing='24px' pb="5" alignContent="center">
              <Box>
                <FormLabel htmlFor='title'>Title</FormLabel>
                <Input
                  ref={titleRef}
                  name='title'
                  id='title'
                  placeholder='Enter post title'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='content'>Content</FormLabel>
                <Input
                  ref={contentRef}
                  name='content'
                  id='content'
                  placeholder='Please enter post content'
                />
              </Box>

              <Box display={"flex"} justifyContent="space-between" alignItems={"center"}>
                <FormLabel htmlFor='author'>Author</FormLabel>
                <SelectUsers ref={authorRef}/>
              </Box>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3}>
              Close
            </Button>
            <Button colorScheme='blue' onClick={onCreate}>Create</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
