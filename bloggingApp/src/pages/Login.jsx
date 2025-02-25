import React from 'react';
import { Login as LoginComponent } from '../components';

function Login() {
  return (
    <div className='py-8 bg-gray-50 min-h-screen'>
      <Container>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <LoginComponent />
        </div>
      </Container>
    </div>
  );
}

export default Login;