import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import Service from "../appwrite/config";
import { Query } from 'appwrite';

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const postsData = await Service.getPosts([Query.equal("status", "active")]);
                setPosts(postsData.documents);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally{
                setLoading(false);
            }
        };

        fetchData();
    }, [])

    if(loading){
        return <div>Loading...</div>
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.length === 0 ? (
                        <div className="w-full text-center">
                            <h1 className="text-2xl mt-32 font-bold">No posts available</h1>
                        </div>
                    ) : (
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))
                )}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts