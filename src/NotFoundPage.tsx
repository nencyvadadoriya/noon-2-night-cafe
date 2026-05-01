import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './components/Layout';

const NotFoundPage: React.FC = () => {
  return (
    <Layout darkHeader={true}>
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-9xl font-extrabold text-orange-500 tracking-widest">404</h1>
        <div className="bg-zinc-900 text-white px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
            Oops! The coffee's gone cold.
          </h2>
          <p className="text-zinc-600 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-orange-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
