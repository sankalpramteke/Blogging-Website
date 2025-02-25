import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
        <Container>
          <div className="flex flex-col items-center justify-center space-y-6 px-4">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 text-center">
              Welcome to BlogSpace
            </h1>
            <p className="text-gray-600 text-center max-w-md">
              Discover amazing stories, insights, and perspectives from writers around the world
            </p>
            <Link to="/login" className="mt-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Reading
              </button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-white to-gray-50 py-12'>
      <Container>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Latest Posts</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4'>
          {posts.map((post) => (
            <div key={post.$id} className='transform hover:-translate-y-2 transition-all duration-300'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;