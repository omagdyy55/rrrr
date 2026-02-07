"use client";

import LoginPage from './login/page';
import ProtectedRoute from './protected-route';

const Home = () => {
  return (
    <ProtectedRoute>
      <LoginPage />
    </ProtectedRoute>
  );
};

export default Home;
