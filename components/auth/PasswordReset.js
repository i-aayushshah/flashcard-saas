// /components/auth/PasswordReset.js
import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth'; // Import this function from Firebase
import { auth } from '../../utils/firebase'; // Make sure to configure Firebase correctly
import { useRouter } from 'next/router';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleReset = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('A password reset link has been sent to your email address.');
    } catch (error) {
      setError('Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Reset Password</h2>
        <form onSubmit={handleReset}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {message && (
            <div className="mb-4 text-green-600 font-semibold">{message}</div>
          )}
          {error && (
            <div className="mb-4 text-red-600 font-semibold">{error}</div>
          )}
          <button
            type="submit"
            className={`w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
        <div className="mt-4 text-gray-600 text-center">
          Remembered your password?{' '}
          <button
            onClick={() => router.push('/signin')}
            className="text-indigo-600 hover:text-indigo-800 font-semibold"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
