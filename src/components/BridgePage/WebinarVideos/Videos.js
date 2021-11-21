import React,{useState} from 'react';
import Video from './Video'
const webinarVideosInfo = [
    {
        id:1,
        url: 'https://youtu.be/GNB-lK_cAXo',
        name:'Career of Software Engineering Feild',
        author:'Sumit Saha'
    },
    {
        id:2,
        url: 'https://youtu.be/GNB-lK_cAXo',
        name:'Career of Software Engineering Feild',
        author:'Sumit Saha'
    },
    {
        id:3,
        url: 'https://youtu.be/GNB-lK_cAXo',
        name:'Career of Software Engineering Feild',
        author:'Sumit Saha'
    },
   
]
const Videos = () => {
    const [videos, setVideos] = useState(webinarVideosInfo)
    return (
       
            <div className="row my-5 py-3">
                 <h1 style={{fontWeight:'700',color:'#23303F'}}>OUR PREVIOUS WEBINAR VIDEOS</h1>
                {
                    videos.map(video => <Video key={video.id} video={video}  />)
                }
            </div>
        
    );
};

export default Videos;