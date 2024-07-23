import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from './appwrite/auth';
import appwriteService from './appwrite/config';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
          checkAndCreateSamplePost(userData.$id);
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  const checkAndCreateSamplePost = async (userId) => {
    const posts = await appwriteService.getPosts();
    if (posts.total === 0) {
      await appwriteService.createPost({
        title: 'Sample Post',
        slug: 'sample-post',
        content: 'This is a sample post created upon login.',
        featuredImage: '',
        status: 'active',
        userId: userId,
      });
    }
  };

  return !loading ? (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
