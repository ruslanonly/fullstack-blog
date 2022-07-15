import React from 'react';

import { 
  Box
} from '@chakra-ui/react';

import { IPost } from '../../types';

type PostProps = {
  post: IPost
}

type AuthorNameProps = {
  author: string
}

function AuthorName(props : AuthorNameProps) {
  return (
    <span className='name'>{props.author || "noname"}</span>
  )
}

export default function Post(props: PostProps) {
  let { post } = props;
  return (
    <div className='post'>
      <div className="top">
        <div className='title'>{post.title}</div>
      </div>
      <div className="middle">
        <div className="content">{post.content.slice(0, 150)}</div>
      </div>
      <div className="bottom">
        <div className="author"><AuthorName author={post.author}/></div>
        <div className="date-created">{post.data_created.toLocaleString()}</div>
      </div>
    </div>
  )
}
