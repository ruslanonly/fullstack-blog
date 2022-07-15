import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom'

import { Container, Heading , Text, Skeleton, Box, Divider } from '@chakra-ui/react';
import { IPost, IUser } from '../../types';

export default function PostPage() {
  let [post, setPost] = useState<IPost>({} as IPost)
  let [user, setUser] = useState<IUser>({} as IUser);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/getpostuserjoin/${id}`)
    .then((res : AxiosResponse) => {
      let data = res.data;
      setPost(data);
      console.log(data);
    });
  }, []);

  return (
    <Container>
      <Box display="grid" 
      gridTemplateRows="1fr auto"
      gap={3}>
        <Box display={"flex"} justifyContent="space-between" alignItems={"center"}>
          <Heading variant="h1">
            {post.title}
          </Heading>
          <Text fontWeight={"bold"} color={"var(--colors-gray-400)"}>{post.author}</Text>
        </Box>
        
        <Box display={"flex"}
        justifyContent={"flex-start"}>
          <Text>{post.content}</Text>
        </Box>
      </Box>
    </Container>
  )
}
