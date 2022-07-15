import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios';

import { IPost } from '../../types'
import { Spinner, useBoolean } from '@chakra-ui/react';

import Posts from './Posts';

import { UpdatePostsContext } from './UpdatePostsContext';


export default function PostsPage() {
  const [isLoaded, setIsLoaded] = useBoolean(false);
  const [posts, setPosts] = useState<IPost[]>([] as IPost[]);
  const [updatePosts, setUpdatePosts] = useState(true);
  const changeUpdatePosts = (value: boolean) => setUpdatePosts(value);
  useEffect(() => {
    axios.get("/api/posts")
    .then((response : AxiosResponse) => {
      setPosts(response.data);
      setIsLoaded.on();
    })
    .catch((reason) => {
      console.log(reason);
      setIsLoaded.on();
    })
    setUpdatePosts(false)
  }, [updatePosts])

  return (
    <div className='page page-posts'>
      <UpdatePostsContext.Provider value={changeUpdatePosts}>
        { isLoaded ? <Posts posts={posts}/> : <Spinner/> }
      </UpdatePostsContext.Provider>
    </div>   
  )
}
