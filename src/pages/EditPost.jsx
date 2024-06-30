import React, { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import service from '../appwrite/config'
import {Container, PostForm} from '../components/index'

function EditPost() {
    const [post, setPost] = usestate(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            service.getPost(slug).then((post) => {
                if(post) setPost(post)
            })
        }
        else navigate('/')
    }, [slug,navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post = {post} />
        </Container>
    </div>
  ) : null
}

export default EditPost