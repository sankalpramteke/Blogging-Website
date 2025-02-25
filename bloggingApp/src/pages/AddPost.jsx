import React from 'react';
import { Container, PostForm } from '../components';

function AddPost() {
  return (
    <div className='py-8 bg-gray-50 min-h-screen'>
      <Container>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Create a New Post</h1>
          <PostForm />
        </div>
      </Container>
    </div>
  );
}

export default AddPost;