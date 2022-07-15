import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import Post from './Post';
import AddNewPostButton from './AddNewPostButton';

import { IPost } from '../../types';

type PostsProps = {
  posts: IPost[]
}

export default function Posts(props: PostsProps) {
  let {posts} = props;
  console.log(posts)
  return (
    <div className='posts'>
      {

        posts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <Post post={post}/>
          </Link>
        ))
      }
      <AddNewPostButton/>
    </div>
  )
}
