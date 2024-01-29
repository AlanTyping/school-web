import React from 'react'
import { api } from '@/app/api/api';
import PostsDisplay from './PostsDisplay';

export default async function PostsApi () {
  const posts = await api.posts()
  const displayPosts = posts.slice(0, 3);

  return <PostsDisplay posts={displayPosts} />
}
