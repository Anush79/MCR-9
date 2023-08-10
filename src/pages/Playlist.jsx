import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import VideoCard from "../components/VCard";
import NavBar from "../components/LeftSideBar";
export default function Playlist() {
  const { listName } = useParams();
  const { personalData } = useData();

  const foundPlaylist = personalData.playlists.find(
    (item) => item.name === listName
  );
  console.log({ foundPlaylist });
  return (
    <div className="flex">
      <NavBar />
      <div className="pl-2 grow">
        <h1 className="font-bold text-3xl border-b-2 border-gray-950 ">{foundPlaylist.name} playlist</h1>
        <div className="flex flex-wrap ">
          {(foundPlaylist?.videos.length > 0 &&
            foundPlaylist?.videos?.map((item) => (
              <VideoCard item={item} />
            ))) || <p className="">No video in this playlist</p>}
        </div>
      </div>
    </div>
  );
}
