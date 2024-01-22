import React from 'react'
import { api } from '@/app/api';
import PostsDisplay from './PostsDisplay';

export default async function PostsApi () {
  const posts = await api.posts();

  return <PostsDisplay posts={posts} />
}
