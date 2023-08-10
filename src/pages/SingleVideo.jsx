import { useParams } from "react-router-dom";
import LeftSideBar from "../components/LeftSideBar";
import VideoCard from "../components/VCard";
import { videos } from "../db/videos";
import { useData } from "../context/DataContext";

export default function SingleVideo() {
  const { videoId } = useParams();
  const { dispatch } = useData();

  const foundVideo = videos.find((item) => item._id === +videoId);
  
  return (
    <>
      <div className='flex '>
        <LeftSideBar></LeftSideBar>
        <div className="main text-left p-2 flex-grow">
          <h1 className='font-bold text-2xl mb-4'>{foundVideo?.title}</h1>
          <iframe width="560" height="315" src={foundVideo.src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <div className="cta-buttons w-[560px] pt-4 flex justify-between border-2">
            <button>Like</button>
            <button onClick={(e)=>{
            e.stopPropagation()
            dispatch({type:"ADD_TO_PLAYLIST" , payload:{video:foundVideo, playlist:"xyz"}})}}>Add to playlist</button>
          <button onClick={(e)=>{
            e.stopPropagation()
            dispatch({type:"ADD_TO_WATCHLATER" , payload:foundVideo})}}>Add to WatchLater</button>
       
          </div>

        </div>
      </div>

    </>
  );
}
