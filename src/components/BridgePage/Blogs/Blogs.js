import React from 'react';
import Blog from './Blog'

const blogsInfo = [
    {
        id:1,
        title:'Career About Machine Learning',
        author: 'Tamim Shahriar',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id:2,
        title:'Career About Textile Engineering',
        author: 'Tanzim Fahad',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id:3,
        title:'Career About Web Development',
        author: 'Jhankar Mahbub',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
]
const Blogs = () => {
    

    return (
        
            <div className="row my-5 py-2">
                <h1 style={{color:'#2E374E',fontWeight:'700'}}>RECENT BLOGS</h1>
            {
                blogsInfo.map(blog => <Blog blog={blog} />)
            }    
            </div>
        
    );
};

export default Blogs