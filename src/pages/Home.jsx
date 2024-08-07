import React, { useEffect, useState } from 'react';
import Service from "../appwrite/config";
import authService from "../appwrite/auth";
import { Container, PostCard } from '../components';
import { useNavigate } from 'react-router-dom';
import { Query } from 'appwrite';

function Home() {
    const [posts, setPosts] = useState([]);
    const [inposts, setInposts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch user data and posts in parallel
                const userData = await authService.getCurrentUser();
                setIsLoggedIn(!!userData);

                if (userData) {
                    const postsData = await Service.getPosts([
                        Query.equal("userId", userData.$id),
                        Query.equal("status", "active")
                    ]);
                    setPosts(postsData.documents);

                    const inpostsData = await Service.getPosts([
                        Query.equal("userId", userData.$id),
                        Query.equal("status", "inactive")
                    ])
                    setInposts(inpostsData.documents);
                }

            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isLoggedIn) {
        return (
            <div className="w-full h-full mb-20 py-8 mt-20 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-400 cursor-pointer"
                                onClick={() => navigate("/login")}>
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    if (posts.length === 0 && inposts.length==0) {
        return (
            <div className="w-full h-full mb-20 py-8 mt-20 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <button onClick={() => navigate('/add-post')}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                                Create Blog
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className='w-full py-8'
        >
            {posts.length === 0 ? (null) : (
                <Container>
                    <h1 className='font-sans text-5xl mb-5 ml-3 text-purple-600 bg-slate-900 w-max p-4 rounded-3xl'>
                        My Active Blogs
                    </h1>
                    <div className='flex flex-wrap mb-5'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            )}
            {inposts.length === 0 ? (null) : (
                <Container>
                    <h1 className='font-sans text-5xl mb-5 ml-3 text-purple-600 bg-slate-900 w-max p-4 rounded-3xl'>
                        My Inactive Blogs
                    </h1>
                    <div className='flex flex-wrap'>
                        {inposts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            )}
        </div>
    );
}

export default Home;
