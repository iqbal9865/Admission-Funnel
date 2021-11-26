import React from 'react';
import ReactPlayer from 'react-player';
const Video = ({video}) => {
    // const video = props;
    return (
        <div className="col-md-4 py-4 "> 
            <div class="card shadow" >
                <div className="">
                    <ReactPlayer url={video.url} className="react-player"
                        playing
                        width="100%"
                        height="100%"
                        autoPlay={false}
                        autoStart={false}
                        controls={false} 
                    />
                </div>
                
                <div className="card-body">
                    <h5 className="card-title">{video.name}</h5>
                    <p className="card-text">{video.author}</p>
                    
                </div>
                </div>
        </div>
    );
};

export default Video;