import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import service from "../appWrite/config"
import { Container, PostForm } from "../Component"

export const EditPostPage = () => {
    const [post, setPosts] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }else{
            navigate("/")
        }
    },[])
return post ? (
    <div className="py-8">
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
) : null
}
