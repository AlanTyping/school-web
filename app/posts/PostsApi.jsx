import React from 'react'
import { api } from '@/app/api/api';
import { Posts } from './Posts';
import { unstable_noStore as noStore } from 'next/cache';

noStore()
export default async function PostsApi () {
  noStore()
  const posts = await api.posts();
  
  return <Posts posts={posts} />
};
