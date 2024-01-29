import React from 'react'
import { api } from '@/app/api/revalidate/api';
import { Posts } from './Posts';

export default async function PostsApi () {
  const posts = await api.posts();
  
  return <Posts posts={posts} />
};
