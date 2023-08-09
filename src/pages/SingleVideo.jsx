import { useParams } from "react-router-dom";
import LeftSideBar from "../components/LeftSideBar";
import VideoCard from "../components/VCard";
import { videos } from "../db/videos";


export default function SingleVideo() {
  const { videoId } = useParams();
  const foundVideo = videos.find((item) => item._id === +videoId);
  return (
    <>
   <div className='flex  '>
      <LeftSideBar></LeftSideBar>
      <div className="main text-left p-2">
        <h1 className='font-bold text-2xl mb-4'>{foundVideo?.title}</h1>
        <iframe width="560" height="315" src={foundVideo.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className="cta-buttons">
<button>Like</button>
<button>Add to playlist</button>
<button>Add to WatchList</button>
        </div>
    
    </div>
    </div>
      
    </>
  );
}
