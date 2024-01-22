import React from 'react'
import { api } from '@/app/api';
import { Posts } from './posts/Posts';

export default async function PostsApi () {
  const posts = await api.posts();

  return <Posts posts={posts} />
}
