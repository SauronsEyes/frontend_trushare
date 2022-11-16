
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const VideoDisplay = () => {
    const [youtubeVideosList,setYoutubeVideos] = useState();
    const [currentVideoIndex,setCurrentVideoIndex] = useState(0)
    useEffect(()=>{
       console.log(getData());
        
    },[])
    async function getData() {
       
        try{
            const response = await axios.get('http://150.243.202.66:8000/?index=1');
            setYoutubeVideos(response.data)
            return response.data;
        }catch(error) {
            return [];
        } 
            
    }
    
    return ( 
        <div className="youtubeVideoContainer">
            <div className="videoSlider">
                <div className="innerVideoSlider d-flex">
                    {youtubeVideosList && youtubeVideosList.items.slice(0,10).map((video,index)=>{
                        return (
                            <div className="video" key={index}>
                                {
                                    index === currentVideoIndex
                                    ? <iframe width="500px" height="100%" className="ytVideo active" src={`https://www.youtube.com/embed/${video.id.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    : <iframe width="500px" height="100%" className ="ytVideo" src={`https://www.youtube.com/embed/${video.id.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                }
                            </div>
                        )
                    }
                    )}
                </div>
                

          </div>
        </div>
    );
}
 
export default VideoDisplay;