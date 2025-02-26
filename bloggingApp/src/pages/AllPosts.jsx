import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";
import { useLocation } from 'react-router-dom';

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Fetch posts whenever the component mounts or when location changes
    const fetchPosts = async () => {
      const postsData = await appwriteService.getPosts([]);
      if (postsData) {
        setPosts(postsData.documents);
      }
    };

    fetchPosts();
  }, [location]); // Add location as a dependency to re-fetch when navigation occurs

  return (
    <div className='w-full py-8 bg-gray-50 min-h-screen'>
      <Container>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">All Posts</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;