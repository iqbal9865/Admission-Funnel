import React,{useState} from 'react';
import Comments from './Comments'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const Blog = ({blog}) => {

    const [comments,setComments] = useState(false)
    const [like, setLike] = useState(false)
    const [disLike, setDisLike] = useState(false)
    const handleDislike = () => {
        setDisLike(!disLike)
    }
    const handleLike = () => {
            setLike(!like)
    }
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
                
               <div className='d-flex'>
           
                {comments ?
                    <Comments handleComments={handleComments} /> :
                    <span onClick={handleComments} style={{cursor:"pointer",textAlign:'left',textDecoration:'underline'}} className='px-3'>write comment</span>
                    
                }
                   <div>
                    {like ? <FontAwesomeIcon onClick={handleLike} className='mx-1' icon={faThumbsUp} style={{height:'25px', width:'35px',border:'1px solid black',borderRadius:'50%',padding:'2px', cursor:'pointer',color:'black'}} />
                    :
                    <FontAwesomeIcon onClick={handleLike} className='mx-1' icon={faThumbsUp} style={{height:'25px', width:'35px',border:'1px solid black',borderRadius:'50%',padding:'2px', cursor:'pointer',color:'blue'}} />}

                    {disLike ? <FontAwesomeIcon onClick={handleDislike} className='mx-1' icon={faThumbsDown} style={{height:'25px', width:'35px',border:'1px solid black',borderRadius:'50%',padding:'2px', cursor:'pointer',color:'black'}} />
                    :
                    <FontAwesomeIcon onClick={handleDislike} className='mx-1' icon={faThumbsDown} style={{height:'25px', width:'35px',border:'1px solid black',borderRadius:'50%',padding:'2px', cursor:'pointer',color:'blue'}} />}
                    
                   </div>  
                   
               </div>
            </div>
        </div>
    );
};

export default Blog;