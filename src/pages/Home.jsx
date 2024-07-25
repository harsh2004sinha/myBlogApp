import React, { useEffect, useState } from 'react';
import Service from "../appwrite/config";
import authService from "../appwrite/auth";
import { Container, PostCard } from '../components';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch user data and posts in parallel
                const [userData, postsData] = await Promise.all([
                    authService.getCurrentUser(),
                    Service.getPosts()
                ]);

                setIsLoggedIn(!!userData);
                setPosts(postsData.documents);
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
                            <h1 className="text-2xl font-bold hover:text-gray-300 cursor-pointer">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    if (posts.length === 0) {
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
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
