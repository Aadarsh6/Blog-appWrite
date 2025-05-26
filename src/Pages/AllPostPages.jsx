import service from "../appWrite/config"
import { useState, useEffect } from "react"
import { Container, PostCard } from "../Component"

export const AllPostPages = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
    service.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
    },[])
return (
    <div className="w-full py-8">
        <Container>
            <div className="flex flex-wrap">
            {posts.map((post)=>(
                <div key={post.$id} className="p-2 w-1/4">

                {//!About KEY
                /*?
                // When React renders a list of elements, it needs to keep track of each element so it can //!efficiently update, add, or remove items.
                //!key helps React identify which items have changed, are added, or removed.
                */}

            <PostCard post={post} />
            </div>
            ))}
            </div>
        </Container>
    </div>
)
}
