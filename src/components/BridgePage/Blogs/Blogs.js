import React,{useState, useEffect} from 'react';
import Blog from './Blog'

const Blogs = () => {
    
    const [blogs, setblogs] = useState([])
    useEffect(()=>{
        fetch('https://cryptic-stream-76661.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setblogs(data))
    },[])

    return (
        
            <div className="row my-5 py-2">
                <h1 style={{color:'#2E374E',fontWeight:'700'}}>RECENT BLOGS</h1>
            {
                blogs.map(blog => <Blog blog={blog} key={blog.id} />)
            }    
            </div>
        
    );
};

export default Blogs