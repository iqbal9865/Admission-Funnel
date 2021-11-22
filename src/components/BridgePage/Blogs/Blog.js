import React,{useState} from 'react';
import Comments from './Comments'
const Blog = ({blog}) => {

    const [comments,setComments] = useState(false)

    const handleComments = ( ) => {
        setComments(!comments)
    }
    return (
        <div className='col-md-4 py-4'>
            <div class="card shadow p-4" >
                <div className="">
                  <h5 style={{fontWeight: 'bold'}} className="card-title">{blog.title}</h5> <span>{blog.author}</span>
                </div>
                
                <div className="card-body">
                    <p style={{textAlign: 'justify'}} className="card-text">{blog.content}</p>
                    
                </div>

                {comments ?
                 <Comments handleComments={handleComments} /> :
                <span onClick={handleComments} style={{cursor:"pointer",textAlign:'left',textDecoration:'underline'}} className='px-3'>write comment</span>

               }
            </div>
        </div>
    );
};

export default Blog;