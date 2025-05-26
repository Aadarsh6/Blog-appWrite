import { Container, PostForm } from "../Component"
import { useEffect, useState } from "react"
import service from "../appWrite/config"
// import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        service.getPost().then((posts)=>{
            if(posts){
                setPosts(posts.documents)   //! The documents field is part of Appwrite response — it’s a list (array) of     document objects fetched from the database.
            }
        })
    },[])

    if(posts.length === 0){
    <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
    </div>
    }


  return (
    <div className=" w-full py-8">
        <Container>
            <div className="flex flex-wrap">
                {posts.map((post)=>(
                    <div key={post.$id} className="p-2 w-1/4">
                    <PostForm {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}
